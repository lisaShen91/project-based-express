define([], function() {
	return {
		load: function() {
			var app = document.getElementById('app'),
				subChild = document.getElementById('child1');
			if (subChild) {
				app.removeChild(subChild);
			} else {
				subChild = document.createElement('div');
				subChild.id = 'child1';
				subChild.innerHTML = Date.now();
				app.appendChild(subChild);
			}
		}
	}
});
