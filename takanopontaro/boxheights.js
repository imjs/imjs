
imjs.conf.plugin.boxheights = {
};

imjs.addCommand(function () {
	var c = imjs.conf.plugin.boxheights, els = imjs.getElements('.' + (imjs.conf.prefix + '-boxheights')), list = {},
		css = imjs.getBrowserFromUa().ie6 ? ['height', 'auto'] : ['minHeight', 0];
	imjs.forEach(els, function (el, i) {
		var group = imjs.getAttribute(el, 'data-group') || '_', group = (list[group] = list[group] || []);
		if (imjs.getAttribute(el, 'data-children') == 'true') {
			imjs.forEach(el.children, function (el, i) {
				group.push(el);
			});
		}
		else {
			group.push(el);
		}
	});
	for (var group in list) {
		var max = 0;
		imjs.forEach(list[group], function (el, i) {
			el.style[css[0]] = css[1];
			var style = imjs.getComputedStyle(el),
				h = el.clientHeight - (parseInt(style.paddingTop) + parseInt(style.paddingBottom));
			max = Math.max(max, Math.ceil(h));
		});
		imjs.forEach(list[group], function (el, i) {
			el.style[css[0]] = max + 'px';
		});
	}
});
