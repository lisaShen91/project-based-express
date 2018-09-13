/**
 * Created by shenlisha on 2018/2/4.
 */
var swig = require('swig');
var _ = require('underscore');
function cur(fn, n) {
	return function(m) {
		return fn.call(this, m, n);
	}
}
function fn(m, n) {
	return n + m;
}
var a = cur(fn, 1);

swig.setFilter('filter1', function(value) {
	return value === 1 ? 'aaa1' : 'bbb2';
});
swig.setFilter('content', _.partial(a));