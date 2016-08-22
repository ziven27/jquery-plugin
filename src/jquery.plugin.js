/**
 * @面向对象 jquery 插件骨架
 * @作者 ziven
 * @日期 2016-08-22
 * @Version 1.1
 */


// 创建一个闭包
;
(function ($, window, document, undefined) {
	// 私有变量
	var _pluginName = "pluginName";
	// 默认参数
	var _defaults = {
		msg: 'tada! your plugin init success'
	};

	// 创建对象
	function Obj(element, options) {
		this.opt = $.extend({}, _defaults, options, true);
		this.init();
	};

	// 对象暴露的方法
	Obj.prototype.init = function () {
		console.log(this.opt.msg);
	};

	// 创建插件
	$.fn[_pluginName] = function (options) {
		this.each(function () {
			// 讲初始化后的对象存储到$.data里
			!$.data(this, "$" + _pluginName) && $.data(this, "$" + _pluginName, new Obj(this, options));
		});

		// 链式调用
		return this;
	};

})(jQuery, window, document);