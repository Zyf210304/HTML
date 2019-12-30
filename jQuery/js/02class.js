// function test(){
// 	alert("test:外部声明");
// }

//声明对象
// var zyftest = {};
// zyftest.test = function() {
// 	alert("test:外部声明");
// }

//工厂模式
// function getZyf(){
// 	var zyftest = {};
// 	zyftest.test = function() {
// 		alert("工厂");
// 	}
// 	return zyftest;
// }

//匿名自调用
// (function (){
// 	var zyftest = {};
// 	zyftest.test = function() {
// 		alert("工厂");
// 	}
// 	// alert("匿名自调用");
// 	return zyftest;
// })();

//闭包
(function (){
	var zyftest = {};
	zyftest.test = function() {
		alert("工厂");
	}
	// alert("匿名自调用");
	return zyftest;
})(window);