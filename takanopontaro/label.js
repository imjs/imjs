
imjs.conf.plugin.label = {
};

imjs.addCommand(function () {
	var browser = imjs.getBrowserFromUa();
	if (!browser.ie6 && !browser.ie7 && !browser.ie8) return;
	var c = imjs.conf.plugin.label, nodes = imjs.getElements('.' + (imjs.conf.prefix + '-label')), els = [];
	imjs.forEach(nodes, function (el, i) {
		if (imjs.getAttribute(el, 'data-descendant') == 'true') {
			els = els.concat(imjs.getElements('label', el));
		}
		else {
			els.push(el);
		}
	});
	imjs.forEach(els, function (el, i) {
		var targets = [el];
		if (!browser.ie6) {
			var img = imjs.getElements('img', el);
			if (img.length == 0) return;
			targets = img;
		}
		var inputs = imjs.getElements('input', el);
		if (inputs.length == 0) return;
		var input = inputs[0], checkable = /radio|checkbox/.test(input.type),
			f = function (e) {
				if (!checkable && e.srcElement.tagName != 'INPUT') {
					input.focus();
					return;
				}
				if (e.srcElement == input || (input.type == 'radio' && input.checked)) return;
				input.checked = !input.checked;
			};
		imjs.forEach(targets, function (el, i) {
			imjs.on(el, 'click', f);
		});
	});
});
