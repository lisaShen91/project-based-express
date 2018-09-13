/**
 * Created by shenlisha on 2018/1/26.
 */
(function() {
	function cur(fn, n) {
		return function(m) {
			return fn.call(this, m, n);
		}
	}
	function fn(m, n) {
		return n[m];
	}
	var a = cur(fn, {name: 'hahaha'});

	console.log(a('name'));



	/*function currying(fn, n) {
		return function (m) {
			return fn.call(this, m, n);
		};
	}

	function tailFactorial(n, total) {
		if (n === 1) return total;
		return tailFactorial(n - 1, n * total);
	}

	const factorial = currying(tailFactorial, 1);

	factorial(5)
*/
})();