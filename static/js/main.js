/**
 * Created by shenlisha on 2018/4/19.
 */
require.config({
	baseUrl: '/static/js/',
	shim: {
		director: {
			exports: "Router"
		}
	}
});

require(['route/routes'], function(routes) {
	var router = new Router(routes);
	router.init();
});