/**
 * Created by shenlisha on 2018/1/29.
 */
var express = require('express'),
	router = express.Router();
router.use(function(req, res, next) {
	console.log('time: ', Date.now());
	next();
});
router.get('/', function(req, res) {
	res.render('template/content', {title: 'test', content: '内容'});
});
router.get('/about', function(req, res) {
	res.send('/about');
});
router.get('/page1', function(req, res) {
	res.render('pages/page1');
});
router.get('/404', function(req, res) {
	res.render('404', {message: 'not found'});
});
router.get('/500', function(req, res) {
	res.render('500', {message: '500', name: 1});
});
module.exports = router;