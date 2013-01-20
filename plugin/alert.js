/**
 * Alert
 * https://github.com/imjs/plugin/alert.js
 * Alert its value of href-attribute when clicked elements that has css-class "imjs-alert".
 */
(function () {
	
	function localMethod () {
		// do something
	}
	
	var alertPlugin = function () {
		localMethod();
		var doms =  IMJS.querySelectorAll('.imjs-alert');
		for (var i = 0; i < doms.length; i++) {
			IMJS.on(doms[i], 'click', function () {
				alert(this.getAttribute('href'));
			});
		}
	};
	
	IMJS.addCommand(alertPlugin);
	
})();
