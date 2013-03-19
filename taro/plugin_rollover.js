//author: taro || qitao;

imjs.conf.plugin.rollover = {
  suffix: '_on'
}

/**
 * rollover
 * TODO:説明
 */
imjs.addCommand(function rollover(){

	var matchedClass = imjs.conf.prefix + '-rollover';
	var elems = imjs.getElements('.' + matchedClass);
	var images = [];
	var overRegExp = /.(\w+)$/;
	var option = imjs.conf.plugin.rollover;
	var outRegExp = new RegExp( option.suffix + '.(\\w+)$' );

	getImages(elems, images);

	for (var i = 0, l = images.length; i < l; i++) {
		var image = images[i];
		imjs.on(image, 'mouseover', onMouseover);
		imjs.on(image, 'mouseout', onMouseout);
	};

	function onMouseover(event){
		event || (event = window.event);
		var target = event.target || event.srcElement;
		target.src = target.src.replace(overRegExp, option.suffix +'.$1');
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