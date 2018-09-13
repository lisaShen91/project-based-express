define([], function() {
	return {
		load: function() {
			var app = document.getElementById('app'),
				subChild = document.getElementById('child2');
			/*if (subChild) {
				app.removeChild(subChild);
			} else {
				subChild = document.createElement('div');
				subChild.id = 'child2';
				subChild.innerHTML = Date.now();
				app.appendChild(subChild);
			}*/
			var str = `<div>1214</div>`;
			app.appendChild(subChild);
		}
	}
});