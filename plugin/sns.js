//author: taro || qitao;

imjs.conf.plugin.snsButton = {
	fbDefaultHref: false,
	fbHref: 'http://www.imjp.co.jp',
	fbWidth: 100,
	fbHeight: 22,
	fbLayout: 'button_count',
	fbCount : 'true'
}

/**
 * snsButton
 * TODO:説明
 */
imjs.addCommand(function snsButton(){

	var option = imjs.conf.plugin.snsButton;
	
	facebook();
	twitter();
	mixi();
	weibo();

	

	function facebook(){
		var fbClass = imjs.conf.prefix + '-facebook';
		var fbs = imjs.getElements('.' + fbClass);
		var fbCode = '<iframe src="//www.facebook.com/plugins/like.php?href=${href}&amp;send=false&amp;layout=${layout}&amp;width=${width}&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=${height}" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:${width}px; height:${height}px;" allowTransparency="true"></iframe>';
		var i, l;
		var noCountWidth = 72;

		for (i = 0, l = fbs.length; i < l; i++) {
			var fb = fbs[i];
			var href = fb.getAttribute('data-href') || (option.fbDefaultHref && option.fbHref) || window.location.href;
			var width = fb.getAttribute('data-width') || option.fbWidth;
			width = (fb.getAttribute('data-count') === 'none') ? noCountWidth : width;
			var height = fb.getAttribute('data-height') || option.fbHeight;
			var layout = fb.getAttribute('data-layout') || option.fbLayout;
			var fbHTML = fbCode.replace(/\${href}/, encodeURIComponent(href))
							.replace(/\${width}/g, width)
							.replace(/\${height}/g, height)
							.replace(/\${layout}/g, layout);
			fb.innerHTML = fbHTML;
		};
	}

	function twitter(){
		var twClass = imjs.conf.prefix + '-twitter';
		var tws = imjs.getElements('.' + twClass);
		var twCode = '<a href="https://twitter.com/share" class="twitter-share-button" data-lang="ja" ${url} ${text} ${count} ${hashtags}>Tweet</Tweet>';
		var i;
		var l = tws.length;

		if(l > 0) {
			!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
		}

		for (i = 0; i < l; i++) {
			var tw = tws[i];
			var url = tw.getAttribute('data-url') ? ( 'data-url="' + tw.getAttribute('data-url') + '"' ) : '';
			var text = tw.getAttribute('data-text') ? ( 'data-text="' + tw.getAttribute('data-text') + '"' ) : '';
			var count = tw.getAttribute('data-count') === 'none' ? ( 'data-count="none"' ) : '';
			var hashtags = tw.getAttribute('data-hashtags') ? ( 'data-hashtags="' + tw.getAttribute('data-hashtags') + '"' ) : '';
			var width = tw.getAttribute('data-width');
			var twHTML = twCode.replace(/\${url}/, url)
							.replace(/\${text}/g, text)
							.replace(/\${count}/g, count)
							.replace(/\${hashtags}/g, hashtags);
			
			tw.innerHTML = twHTML;
			if(width){
				tw.style.width = width + 'px';
			}
		};
	}

	function mixi(){
		var mxClass = imjs.conf.prefix + '-mixi';
		var mxs = imjs.getElements('.' + mxClass);
		var mxCode = '<a href="http://mixi.jp/share.pl" class="mixi-check-button" ${url}> </a>';
		var i;
		var l = mxs.length;

		if(l > 0) {
			!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.type="text/javascript";js.src="http://static.mixi.jp/js/share.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","mixi-mjs");
		}

		for (i = 0; i < l; i++) {
			var mx = mxs[i];
			var url = mx.getAttribute('data-url') ? ( 'data-url="' + mx.getAttribute('data-url') + '"' ) : '';
			var mxHTML = mxCode.replace(/\${url}/, url);
			mx.innerHTML = mxHTML;
		};
	}

	function weibo(){
		var wbClass = imjs.conf.prefix + '-weibo';
		var wbs = imjs.getElements('.' + wbClass);
		var wbCode = '<wb:share-button ${count} ${size} ${type} ></wb:share-button>';
		var i;
		var l = wbs.length;

		if(l > 0) {
			!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.type="text/javascript";js.charset="utf-8";js.src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js?appkey=";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","weibo-wjs");
		}

		for (i = 0; i < l; i++) {
			var wb = wbs[i];
			var count = (wb.getAttribute('data-count') === 'none') ? 'count="n"' : '';
			var size = wb.getAttribute('data-size') ? 'size="' + wb.getAttribute('data-size') + '"' : '';
			var type = wb.getAttribute('data-type') ? 'type="' + wb.getAttribute('data-type') + '"' : '';
			var wbHTML = wbCode.replace(/\${count}/, count)
							.replace(/\${size}/g, size)
							.replace(/\${type}/g, type);
			wb.innerHTML = wbHTML;
		};
	}


});