//author: ahomegane

var imjsConf = {
  prefix: 'imjs'
}

imjsConf.scroll = {
  speed: 500,
  offset: 20,
  easing: 'swing' 
}

/**
 * scroll
 * 特定の位置へスクロール
 */
o.addCommand(function scroll(){

  var requestAnimationFrame = o.requestAnimationFrame();
  
  var anchors = o.getElements('a');
  
  o.forEach(anchors, function () {

    var hash = this.hash;
    var rClassName = new RegExp( imjsConf.prefix + '-scroll' );

    //check hash & className
    if( hash.match(/^#/) && this.className.match(rClassName) ) {

      var target = o.getElements(hash)[0];

      if( target ) {

        //animate conf
        var dataSpeed = this.getAttribute('data-speed'),
            dataOffset = this.getAttribute('data-offset'),
            dataEasing = this.getAttribute('data-easing');
        var speed = dataSpeed || imjsConf.scroll.speed || 500;//ms
        var offset = dataOffset || imjsConf.scroll.offset || 20;//px
        var easing = dataEasing || imjsConf.scroll.easing || 'linear';


        //click event
        o.on(this, 'click', function(e) {

          //target val
          var start = o.getScrollPosition().top, 
              left = o.getScrollPosition().left,
              end =  o.getElementPosition(target).top - offset,
              move = end - start;

          //start animate
          var startTime = +(new Date),
              duration = speed;

          (function step(){

            var progress = +(new Date) - startTime;
            //var current = start + (move * progress/duration);
            var current = o.easing[easing](progress, start, move, duration);
            
            window.scrollTo(left, current);

            if(progress > duration) {
              window.scrollTo(left,end);
              //if(typeof callback == 'function') callback();
            } else {
              requestAnimationFrame(step);
            }
            
          })();

          o.preventDefault(e);//chromeでhashがsetされる

        });

      }

    }

  });

});