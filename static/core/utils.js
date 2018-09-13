/**
 * Created by shenlisha on 2018/3/6.
 */

function currying(fn, n) {
	return function(m) {
		return fn.call(this, m, n);
	}
}

var fn = function(m, n) {
	return n[m];
};
function add(m, n) {
	return m + n;
}

var utils = {
	toZH: currying(fn, {apple: '苹果'}),
	add: currying(add, 1)
};

/*

var xhr = new XMLHttpRequest();
xhr.open("get", "https://www.baidu.com/", true);
xhr.setRequestHeader('Origin', "https://www.baidu.com");
xhr.setRequestHeader('Access-Control-Request-Method', "get");
xhr.setRequestHeader('Access-Control-Request-Headers', "content");
xhr.send(null);*/
