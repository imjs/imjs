//author: ahomegane || datemegane;

imjs.conf.plugin.scroll = {
  speed: 500,
  offset: 20,
  easing: 'swing'
}

/**
 * scroll
 * 特定の位置へスクロール
 */
imjs.addCommand(function scroll(){

  var requestAnimationFrame = imjs.requestAnimationFrame();
  
  var anchors = imjs.getElements('a');
  
  imjs.forEach(anchors, function () {

    var hash = this.hash;
    var rClassName = new RegExp( imjs.conf.prefix + '-scroll' );

    //check hash & className
    if( hash.match(/^#/) && this.className.match(rClassName) ) {

      var target = imjs.getElements(hash)[0];

      if( target ) {

        //animate conf
        var dataSpeed = this.getAttribute('data-speed'),
            dataOffset = this.getAttribute('data-offset'),
            dataEasing = this.getAttribute('data-easing');
        var speed = dataSpeed || imjs.conf.plugin.scrollspeed || 500;//ms
        var offset = dataOffset || imjs.conf.plugin.scrolloffset || 20;//px
        var easing = dataEasing || imjs.conf.plugin.scrolleasing || 'linear';


        //click event
        imjs.on(this, 'click', function(e) {

          //target val
          var start = imjs.getScrollPosition().top, 
              left = imjs.getScrollPosition().left,
              end =  imjs.getElementPosition(target).top - offset,
              move = end - start;

          //start animate
          var startTime = +(new Date),
              duration = speed;

          (function step(){

            var progress = +(new Date) - startTime;
            //var current = start + (move * progress/duration);
            var current = imjs.easing[easing](progress, start, move, duration);
            
            window.scrollTo(left, current);

            if(progress > duration) {
              window.scrollTo(left,end);
              //if(typeof callback == 'function') callback();
            } else {
              requestAnimationFrame(step);
            }
            
          })();

          imjs.preventDefault(e);//chromeでhashがsetされる

        });

      }

    }

  });

});