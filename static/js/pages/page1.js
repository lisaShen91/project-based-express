/**
 * Created by shenlisha on 2018/2/4.
 */
define([], function() {
	console.log('page1');
	console.log(utils.toZH('apple'));
	var RdsList = function(info) {
		console.log(info);
		this._data = info;
	};
	return RdsList;
});