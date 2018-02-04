/**
 * Created by shenlisha on 2018/1/29.
 */
var express = require('express'),
	app = express(),
	router = require('./router'),
	swig = require('swig'),
	underscore = require('underscore'),
	config = require('./config/config'),
	filters = require('./lib/swigFilters'),
	path = require('path');

process.env.ENV = config.env;

app.set('port', 8801);
app.engine('html', swig.renderFile); //定义
app.set('view engine', 'html'); //注册
app.set('views', path.join(__dirname, 'views')); //简化路由
swig.setDefaults({
	locals: {
		_: underscore
	}
});

app.use('/', router);

if (process.env.ENV === 'development') {
	app.use(require('stylus').middleware(__dirname));
	app.use('/static', express.static('static'));
} else {
	app.use('/res', express.static(path.join(__dirname, 'res')));
}

//静态路由
app.use('/views', express.static('views'));
app.use('/lib', express.static('lib'));
app.use('/md', express.static('md'));

app.use(function(err, res, req, next) {
	console.log(err.stack);
	res.status(500).send('Something broke!');
});

app.listen(app.get('port'), function() {
	console.log('app is listening ' + app.get('port'));
});