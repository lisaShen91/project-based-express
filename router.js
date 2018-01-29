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
	res.end("home page");
});
router.get('/about', function(req, res) {
	res.send('/about');
});
module.exports = router;