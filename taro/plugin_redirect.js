//author: taro || qitao;

/**
 * Redirect
 * 特定のURLへリダイレクト
 */
(function( window ) {

	var document = window.document;
	var htmlNode = document.documentElement;
	var targetClass = imjs.prefix + '-redirect';
	var dataTarget;
	var dataUrl;
	var device = o.getDeviceFromUa();

	console.log(device);

	if( htmlNode.className.indexOf( targetClass ) > -1 ) {
		dataTarget = htmlNode.getAttribute( 'data-target' );
		dataUrl = htmlNode.getAttribute( 'data-url' );

	}












})( window );
