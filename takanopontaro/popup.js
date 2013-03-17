
imjs.plugin.popup = {
	width: 500,
	height: 500,
	options: ',menubar=no,toolbar=no,location=yes,status=yes,resizable=yes,scrollbars=yes'
};

imjs.addCommand(function () {
	var c = imjs.plugin.popup, els = imjs.getElements('.' + (imjs.prefix + '-popup'));
	imjs.forEach(els, function (el, i) {
		if (!el.href) return;
		var w = imjs.getAttribute(el, 'data-width') || c.width, h = imjs.getAttribute(el, 'data-height') || c.height;
		imjs.on(el, 'click', function (e) {
			window.open(el.href, el.target, 'width=' + w + ',height=' + h + c.options);
			imjs.preventDefault(e);
		});
	});
});
