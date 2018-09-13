/**
 * Created by shenlisha on 2018/2/8.
 */
var fs = require('fs'),
	path = require('path');
module.exports = {
	readFile: function() {
		return function(req, res, next) {
			fs.readFile(path.join(process.cwd(), req.path), function(err, data) {
				if (err) {
					res.end(err);
				} else if (data) {
					res.locals.Data = {
						readFileData: data.toString()
					};
					next();
				} else {
					throw new Error('read file Error');
				}
			});
		}
	},
	writeFile: function() {
		return function(req, res, next) {
			//检查target dir 是否存在 存在直接写 不存在创建 再写入
			fs.exists(path.join(process.cwd(), req.path), function(exist) {
				if (exist) {
					console.log(1);
					next();
				} else {
					console.log(0);
					next();
				}
			})
		}
	}
};
