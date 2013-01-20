/**
 * Alert
 * https://github.com/imjs/imjs
 * Alert its value of href-attribute when clicked elements that has css-class "imjs-alert".
 * Copyright (c) 2013 JS-SIG of the Front-End Development Dept of IMJ Corporation.
 * Licensed under the MIT license.
 */
(function () {
	
	function localMethod () {
		// do something
	}
	
	var plugin = function () {
		localMethod();
		var doms =  IMJS.querySelectorAll('.imjs-alert');
		for (var i = 0; i < doms.length; i++) {
			IMJS.on(doms[i], 'click', function () {
				alert(this.getAttribute('href'));
			});
		}
	};
	
	IMJS.addCommand(plugin);
	
})();
