//author: ahomegane

var imjsConf = {
  prefix: 'imjs'
}

imjsConf.scroll = {
  speed: 500,
  offset: 20,
  easing: 'swing' 
}


o.extend(o, {

  getElementPosition: function(el) {
    var top = 0, left= 0;

    do {
      top += el.offsetTop  || 0;
      left += el.offsetLeft || 0;
      el = el.offsetParent;

    } while (el);

    return {top: top, left: left};
  },

  getScrollPosition: function() {

    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var left = document.documentElement.scrollLeft || document.body.scrollLeft;      

    return {top: top, left: left};
  },

  addEventListener: function(el, ev, listenerFunc) {

    if(el.addEventListener) { //except for IE
      el.addEventListener(ev, listenerFunc, false);
    } else if(el.attachEvent) { //IE
      el.attachEvent('on' + ev, listenerFunc);
    }
  
  },

  preventDefault: function(e) {
    if(e.preventDefault) { //except for IE
      e.preventDefault();
    } else if(window.event) { //IE
      window.event.returnValue = false;
    }
  },

  requestAnimationFrame: function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(stepFunc) { return window.setTimeout(stepFunc, 1000 / 60); };
  }

});

o.addCommand(function(){

  var requestAnimationFrame = o.requestAnimationFrame();
  
  var anchors = o.getElements('a');
  
  o.forEach(anchors, function(){
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
        o.addEventListener(this, 'click', function(e) {

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
            var current = easings[easing](progress, start, move, duration);
            
            window.scrollTo(left, current);

            if(progress > duration) {
                window.scrollTo(left,end);
                //if(typeof callback == 'function') callback();
            } else {
                requestAnimationFrame(step);
            }
            
          })();
          
          o.preventDefault(e);//chromeでhashがsetされる
          return false;
        });
      }
    }
  });

  //http://hkom.blog1.fc2.com/blog-entry-729.html
  var easings = {
    // t: current time, b: begInnIng value, c: change In value, d: duration

    linear: function(t, b, c, d) {
      return b + c*t/d;
    },

    swing: function(t, b, c, d) {
      return ((-Math.cos(t/d * Math.PI)/2) + 0.5) * c + b;
    },

    easeOutQuad: function (t, b, c, d) {
      return -c *(t/=d)*(t-2) + b;
    }

  }

});



o.ready(function() {
  o.fire();
});