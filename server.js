/**
 * Created by shenlisha on 2018/1/29.
 */
var express = require('express'),
	client = express(),
	router = require('./router'),
	swig = require('swig'),
	port = 8801;

client.engine('html', swig.renderFile); //定义
client.set('view engine', 'html'); //注册
client.set('views', './views'); //简化路由

client.use('/test', router);
client.get('/', function(req, res) {
	// res.sendFile(__dirname + '/index.html');
	res.render('index')
});
client.use('/index', express.static('public'));
client.use('/lib', express.static('lib'));
client.use('/md', express.static('md'));

client.listen(port, function() {
	console.log('app is listening ' + port);
});