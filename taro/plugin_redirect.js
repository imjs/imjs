//author: taro || qitao;

/**
 * Redirect
 * 特定のURLへリダイレクト
 */
(function( window ) {

	var document = window.document;
	var htmlNode = document.documentElement;
	var matchedClass = imjs.prefix + '-redirect';

	if( htmlNode.className.indexOf( matchedClass ) <= -1 ) return;

	var dataTarget = htmlNode.getAttribute( 'data-target' );
	var dataUrl = htmlNode.getAttribute( 'data-url' );

	if( !dataTarget || !dataUrl ) return;

	var targets = dataTarget.split(' ');
	var device = o.getDeviceFromUa();
	var redirect = false;
	
	for (var i = 0, l = targets.length; i < l; i++) {
		var target = targets[i];
		if( target == 'pc' && device.pc ) {
			redirect = true;
			break;
		}
		if ( target == 'sp' && ( device.iphone || device.android || device.windowsphone ) ) {
			redirect = true;
			break;
		}
		if ( target == 'tablet' && ( device.ipad || device.androidtab ) ) {
			redirect = true;
			break;
		}
	}

	if( redirect ) {
		window.location.href = dataUrl;
	}

})( window );
