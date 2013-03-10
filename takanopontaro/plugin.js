
imjs.plugin.popup = {
	width: 500,
	height: 500,
	options: ',menubar=no,toolbar=no,location=yes,status=yes,resizable=yes,scrollbars=yes'
};

imjs.addCommand(function () {
	var c = imjs.plugin.popup, els = imjs.getElements('.' + (imjs.prefix + '-popup'));
	imjs.forEach(els, function (el, i) {
		if (!el.href || /^#/.test(el.href)) return;
		var width = imjs.getAttribute(el, 'data-width') || c.width, height = imjs.getAttribute(el, 'data-height') || c.height;
		imjs.on(el, 'click', function (e) {
			var options = (el.target != '_blank') ? 'width=' + width + ',height=' + height + c.options : '';
			window.open(el.href, el.target, options);
			imjs.preventDefault(e);
		});
	});
});
