
imjs.plugin.label = {
};

imjs.addCommand(function () {
	var browser = imjs.getBrowserFromUa();
	browser = {ie7:true};
	if (!browser.ie6 && !browser.ie7 && !browser.ie8) return;
	var c = imjs.plugin.label, els = imjs.getElements('.' + (imjs.prefix + '-label'));
	imjs.forEach(els, function (el, i) {
		var target = el;
		if (!browser.ie6) {
			var img = imjs.getElements('img', el);
			if (img.length == 0) return;
			target = img[0];
		}
		var inputs = imjs.getElements('input', el);
		if (inputs.length == 0 || !/radio|checkbox/.test(inputs[0].type)) return;
		imjs.on(target, 'click', function (e) {
			if (e.srcElement == inputs[0]) return;
			inputs[0].checked = !inputs[0].checked;
		});
	});
});
