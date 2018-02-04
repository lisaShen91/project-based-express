/**
 * Created by shenlisha on 2018/2/4.
 */
var swig = require('swig');
swig.setFilter('filter1', function(value) {
	return value === 1 ? 'aaa1' : 'bbb2';
});