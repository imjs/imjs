
imjs.plugin.label = {
};

imjs.addCommand(function () {
	var c = imjs.plugin.label, els = imjs.getElements('.' + (imjs.prefix + '-label')), list = {}, css = imjs.getBrowserFromUa().ie6 ? ['height', 'auto'] : ['minHeight', 0];
	imjs.forEach(els, function (el, i) {
		var group = imjs.getAttribute(el, 'data-group') || '_';
		(list[group] = (list[group] || [])).push(el);
	});
	for (var group in list) {
		var max = 0;
		imjs.forEach(list[group], function (el, i) {
			el.style[css[0]] = css[1];
			var style = el.currentStyle || document.defaultView.getComputedStyle(el, '');
			max = Math.max(max, Math.ceil(style.height.replace(/[^\.\d]/g, '')));
		});
		imjs.forEach(list[group], function (el, i) {
			el.style[css[0]] = max + 'px';
		});
	}
});
