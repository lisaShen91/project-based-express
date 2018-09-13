/**
 * Created by shenlisha on 2018/4/19.
 */
require(function() {
	var app = document.getElementById('app'),
		form = document.getElementById('form'),
		result = document.getElementsByClassName('result')[0],
		div1 = document.getElementById("div1"),
		div2 = document.getElementById("div2"),
		drag1 = document.getElementById("drag1");
	div1.ondragover = function(e) {
		e.preventDefault();
		allowDrop(e);
	};
	div1.ondrop = function(e) {
		drop(e);
	};
	div2.ondragover = function(e) {
		e.preventDefault();
		allowDrop(e);
	};
	div2.ondrop = function(e) {
		drop(e);
	};
	drag1.ondragstart = function(e) {
		drag(e);
	};
	function allowDrop(e) {
		e.preventDefault();
	}
	function drag(e) {
		e.dataTransfer.setData("Text", e.target.id);
	}
	function drop(e) {
		e.preventDefault();
		var data = e.dataTransfer.getData("Text");
		e.target.appendChild(document.getElementById(data));
	}

	initPage();


	function initPage() {
		var options = {
			url: 'md/index.md',
			type: 'get'
		};
		ajax(options).onload = function() {
			app.innerHTML = marked(this.responseText);
		};
	}

	form.onsubmit = function testPost(e) {
		e.preventDefault();
		var data = getFormData();
		var options = {
			url: 'datas/index.json',
			type: 'post',
			dataType: 'application/json',
			data: data
		};
		ajax(options).onload = function() {
			var ele = document.createElement('span');
			ele.innerHTML = this.responseText;
			result.append(ele);
		};
	};

	function getFormData() {
		var person = document.getElementsByName('user')[0],
			password = document.getElementsByName('pwd')[0];
		return {
			person: person.attributes['value'].value,
			password: password.attributes['value'].value
		}
	}

	// 发出http请求
	function ajax(options) {
		var type = options.type ? options.type.toUpperCase() : 'GET';
		var xhr = new XMLHttpRequest();
		var data = new FormData();

		xhr.open(options.type, options.url, true);

		if (type === 'POST') {
			xhr.setRequestHeader('Content-Type', options.dataType);
			xhr.send(options.dataType === 'application/json' ? JSON.stringify(options.data) : data);
		} else if (type === 'GET') {
			xhr.send(null);
		}
		return xhr;
	}
});