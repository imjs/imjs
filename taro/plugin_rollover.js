//author: ahomegane || datemegane;

imjs.plugin.rollover = {
  suffix: '_on'
}

/**
 * rollover
 * TODO:説明
 */
o.addCommand(function rollover(){

	var matchedClass = imjs.prefix + '-rollover';
	var elems = o.getElements('.' + matchedClass);
	var images = [];
	var overRegExp = /.(\w+)$/;
	var outRegExp = new RegExp( imjs.plugin.rollover.suffix + '.(\\w+)$' );

	getImages(elems, images);

	for (var i = 0, l = images.length; i < l; i++) {
		var image = images[i];
		o.on(image, 'mouseover', onMouseover);
		o.on(image, 'mouseout', onMouseout);
	};

	function onMouseover(event){
		event || (event = window.event);
		var target = event.target || event.srcElement;
		target.src = target.src.replace(overRegExp, imjs.plugin.rollover.suffix +'.$1');
	}

	function onMouseout(event){
		event || (event = window.event);
		var target = event.target || event.srcElement;
		target.src = target.src.replace(outRegExp, '.$1');
	}

	function getImages(list, images){
		for (var i = 0, l = list.length; i < l; i++) {
			var elem = list[i];
			if(elem.nodeName === 'IMG'){
				if(!exist(images, elem)){
					images.push(elem);
				}
			}
			else if(elem.childNodes){
				getImages(elem.childNodes, images);
			}
		};
	}

	function exist(list, elem){
		for (var i = 0, l = list.length; i < l; i++) {
			if(list[i] === elem){
				return true;
			}
		};
		return false;
	}

});