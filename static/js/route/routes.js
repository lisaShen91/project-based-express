/**
 * Created by shenlisha on 2018/4/19.
 */
define(function() {
	var load = function(page) {
		require([page], function(obj) {
			obj.load();
		});
	};
	return {
		'/a': function() {
			load('pages/a');
		},
		'/b': function() {
			load('pages/b');
		}
	}
});