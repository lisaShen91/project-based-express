/**
 * Created by shenlisha on 2018/1/29.
 */
var express = require('express'),
	router = express.Router(),
	fs = require('../lib/file.js');

router.use(function(req, res, next) {
	// console.log('time: ', Date.now());
	next();
});

router.post('/datas/*', fs.writeFile(), fs.readFile(), function(req, res) {
	res.json(JSON.parse(res.locals.Data.readFileData));
});
router.get('/datas/*', function(req, res) {
	res.set({"Content-Type":"text/event-stream"});
	var interval = setInterval(function () {
	 res.write("data: " + (new Date()) + "\n\n");
	 }, 1000);
	req.connection.addListener("close", function () {
		clearInterval(interval);
	}, false);
});
router.get('/', function(req, res) {
	res.render('index');
});
router.get('/layout', function(req, res) {
	res.render('template/content', {req: req, content: 1});
});

router
	.get('/a/:name', function(req, res) {
		res.send('user ' + req.params.name);
	}).get('/about', function(req, res) {
		res.send('/about');
	}).get('/page/:id', function(req, res) {
		res.render('pages/' + req.params.id, {path: req.path});
	});

router.get('/404', function(req, res) {
	res.render('404', {message: 'not found'});
});
router.get('/500', function(req, res) {
	res.render('500', {message: '500', name: 1});
});
module.exports = router;