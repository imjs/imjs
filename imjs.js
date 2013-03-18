/**
 * @fileOverview imjs JavaScript Library
 * @name imjs.js
 * @version 1.0.0 2012.12.26 Creating New File
 * @namespace global namespace [imjs]
 */

(function( window, document, undefined ) {

  var doc = document;

  var imjs = {

    prefix: 'imjs',

    plugin: {},

    commands: [],

    addCommand: function(cmd, noReady) {

      if (noReady) {
        cmd();
        return;
      }

      this.commands.push(cmd);

    },

    ready: function () {

      var _this = this;

      var callback = function () {
        for (var i = 0, l = _this.commands.length; i < l; i++) _this.commands[i]();
      };

      if (doc.readyState === 'complete') {

        setTimeout(callback, 1);

      } else if (doc.addEventListener) {

        doc.addEventListener('DOMContentLoaded', callback, false);
      
      } else {

        var isReady = false;

        function done() {
          if (!isReady) {
            isReady = true;
            callback();
          }
        };

        (function scrollCheck() {
          try {
            doc.documentElement.doScroll('left');
          } catch (e) {
            setTimeout(scrollCheck, 50);
            return;
          }
          done();
        }());

        doc.onreadystatechange = function () {
          if (doc.readyState == 'complete') {
            doc.onreadystatechange = null;
            done();
          }
        };

      }

    }

  };

  imjs.extend = function(target, object) {

    // imjs deep copy
    for (var i in object) {

      target[i] = object[i];
      
    }

  };

  imjs.extend(imjs, {

    getElements: function(selectors, range) {

      var range = range || document,
          array = [];

      if (typeof selector === 'object') {

        array = [selectors];

      }

      if (typeof selectors === 'string') {

        if (range.querySelectorAll) {

          selectors = range.querySelectorAll(selectors);

          for (var i = 0, l = selectors.length; i < l; i++) {
            array[i] = selectors[i];
          }

        } else {

          if (/^#/.test(selectors)) {

            array = [range.getElementById(selectors.replace(/^./, ''))];
            
          } else if ( /^\./.test(selectors) ) {

            selectors = selectors.replace(/^\./, '');

            var all = range.getElementsByTagName('*'),
                reg = new RegExp('\\b' + selectors + '\\b');

            for (var i = 0, j = 0, l = all.length; i < l; i++) {
              if (reg.test(all[i].className)) {
                array[j] = all[i];
                j++;
              }
            }

          } else {

            selectors = range.getElementsByTagName(selectors);

            for (var i = 0, l = selectors.length; i < l; i++) {
              array[i] = selectors[i];
            }

          }

        }

      }

      return array;

    },

    addClass: function(selectors, className) {

      var hasClass = selectors.className.split(' '),
          flag = true;

      for (var i = 0, l = hasClass.length; i < l; i++) {
        if (hasClass[i] === className) {
          flag = false;
        }
      }
      
      if (flag) {
        selectors.className = hasClass.join(' ') + ' ' + className;
      } 

    },

    removeClass: function(selectors, className) {

      var hasClass = selectors.className.split(' '),
          flag = false;

      for (var i = 0, l = hasClass.length; i < l; i++) {
        if (hasClass[i] === className) {
          hasClass.splice(i, 1);
          flag = true;
        }
      }

      if (flag) {
        selectors.className = hasClass.join(' ');
      }

    },

    getAttribute: function(selectors, attributeName) {

      return selectors.getAttribute(attributeName);

    },

    forEach: function(object, callback) {

      for (var i = 0, l = object.length; i < l; i++) {

        var thisObject = object[i];

        callback.call(thisObject, thisObject, i);

      }

    },

    on: function(target, type, callback) {

      if ( doc.addEventListener ) {
        
        target.addEventListener(type, callback, false);

      } else {

        target.attachEvent('on' + type, callback);

      }

    },

    css: function(selectors, properties) {

      for (var i in properties) {
        selectors.style[i] = properties[i];
      }

    },

    getElementPosition: function(el) {

      var top = 0, left= 0;

      do {
        top += el.offsetTop  || 0;
        left += el.offsetLeft || 0;
        el = el.offsetParent;
      } while (el);

      return {top: top, left: left};

    },

    getScrollPosition: function () {

      var top = document.documentElement.scrollTop || document.body.scrollTop;
      var left = document.documentElement.scrollLeft || document.body.scrollLeft;      

      return {
        top: top,
        left: left
      };

    },

    preventDefault: function(e) {

      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }

    },

    requestAnimationFrame: function () {

      return window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             function (f) { return window.setTimeout(f, 1000 / 60); };

    },

    cancelRequestAnimationFrame: function () {

      return window.cancelRequestAnimationFrame ||
             window.webkitCancelRequestAnimationFrame ||
             window.mozCancelRequestAnimationFrame ||
             window.msCancelRequestAnimationFrame ||
             window.oCancelRequestAnimationFrame ||
             function (id) { window.clearTimeout(id); };

    },

    getDeviceFromUa: function () {

      var ua = window.navigator.userAgent.toLowerCase();
      var deviceType = {
        iphone:       false,
        android:      false,
        windowsphone: false,
        ipad:         false,
        androidtab:   false,
        pc:           false
      }
      
      if ((ua.indexOf('iphone') > -1 && ua.indexOf('ipad') == -1) || ua.indexOf('ipod') > -1) deviceType.iphone = true; //iPhone&iPod
      else if (ua.indexOf('android') > -1 && ua.indexOf('mobile') > -1) deviceType.android = true; //AndroidMobile(一部のタブレット型アンドロイドを含む)
      else if (ua.indexOf('windows phone') > -1) deviceType.windowsphone = true; //WindowsPhone
      else if (ua.indexOf('ipad') > -1) deviceType.ipad = true; //iPad
      else if (ua.indexOf('android') > -1) deviceType.androidtab = true; //AndroidTablet
      else deviceType.pc = true; //PC
      return deviceType;

    },

    getDeviveFromSize: function(breakPointNarrow, breakPointMedium) {

      var width = window.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
      var deviceType = {
        mouseWide: false,
        touchWide: false,
        mouseMedium: false,
        touchMedium: false,
        mouseNarrow: false,
        touchNarrow: false
      }
      
      if (!('ontouchstart' in window)) {

        if (typeof window.addEventListener == 'undefined' && typeof document.getElementsByClassName == 'undefined') {//mediaQueryに対応していないブラウザ(lteIe8)は除外
          deviceType.mouseWide = true;
        } else {
          if (breakPointNarrow && width <= breakPointNarrow) deviceType.mouseNarrow = true;
          else if (breakPointMedium && width <= breakPointMedium) deviceType.mouseMedium = true;
          else deviceType.mouseWide = true;
        }

      } else {

        if (breakPointNarrow && width <= breakPointNarrow) deviceType.touchNarrow = true;
        else if (breakPointMedium && width <= breakPointMedium) deviceType.touchMedium = true;
        else deviceType.touchWide = true;

      } 

      return deviceType;

    },

    getBrowserFromUa: function () {

      var ua = window.navigator.userAgent.toLowerCase(),
          isIE = /msie/.test(ua);
          ieVersion = isIE ? Number(/(msie)[ \/]([\w|\.]+)/.exec(ua)[2]): 0;

      var browserType = {
        lteIe6:  false,
        lteIe7:  false,
        lteIe8:  false,
        lteIe9:  false,
        lteIe10: false,
        ie6:     false,
        ie7:     false,
        ie8:     false,
        ie9:     false,
        ie10:    false,
        ie:      false,
        firefox: false,
        opera:   false,
        chrome:  false,
        safari:  false
      }

      if (isIE) browserType.ie = true;
      if (/firefox/.test(ua)) browserType.firefox = true;
      if (/opera/.test(ua)) browserType.opera = true;
      if (/chrome/.test(ua)) browserType.chrome = true;
      if (/safari/.test(ua)) browserType.safari = true;

      if (isIE) {
        if (ieVersion === 6) {
          browserType.lteIe6 = true;
          browserType.lteIe7 = true;
          browserType.lteIe8 = true;
          browserType.lteIe9 = true;
          browserType.lteIe10 = true;
          browserType.ie6 = true;
        } else if (ieVersion === 7) {
          browserType.lteIe7 = true;
          browserType.lteIe8 = true;
          browserType.lteIe9 = true;
          browserType.lteIe10 = true;
          browserType.ie7 = true;
        } else if (ieVersion === 8) {
          browserType.lteIe8 = true;
          browserType.lteIe9 = true;
          browserType.lteIe10 = true;
          browserType.ie8 = true;
        } else if (ieVersion === 9) {
          browserType.lteIe9 = true;
          browserType.lteIe10 = true;
          browserType.ie9 = true;
        } else if (ieVersion === 10) {
          browserType.lteIe10 = true;
          browserType.ie10 = true;
        }
      }

      return browserType;

    },

    getBrowserFromSupport: function () {

      return {
        lteIe6:  typeof window.addEventListener == 'undefined' && typeof document.documentElement.style.maxHeight == 'undefined',
        lteIe7:  typeof window.addEventListener == 'undefined' && typeof document.querySelectorAll == 'undefined',
        lteIe8:  typeof window.addEventListener == 'undefined' && typeof document.getElementsByClassName == 'undefined',
        ie:      document.uniqueID,
        firefox: window.sidebar,
        opera:   window.opera,
        webkit:  !document.uniqueID && !window.opera && !window.sidebar && window.localStorage && typeof window.orientation == 'undefined',
        mobile:  typeof window.orientation != 'undefined'
      }

    },

    getComputedStyle: function(el) {

      return el.currentStyle || document.defaultView.getComputedStyle(el, '');

    },

    makeArray: function (domArray) {

      var array = [];

      for (var i = 0, l = domArray.length; i < l; i++) {
        array[i] = domArray[i];
      }

      return array;

    },

    easing: {

      linear: function(t, b, c, d) {
        return b + c * t / d;
      },

      swing: function(t, b, c, d) {
        return ( (-Math.cos(t / d * Math.PI) / 2 ) + 0.5) * c + b;
      },

      easeOutQuad: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      }

    }

  });

  window.o = window.imjs = imjs; // export. shotrcut = o
  
  // imjs fire!!!!!
  o.ready();

  // var gu = o.getBrowserFromUa();
  // console.log('lteIe6: ', gu.lteIe6);
  // console.log('lteIe7: ', gu.lteIe7);
  // console.log('lteIe8: ', gu.lteIe8);
  // console.log('lteIe9: ', gu.lteIe9);
  // console.log('ie6: ', gu.ie6);
  // console.log('ie7: ', gu.ie7);
  // console.log('ie8: ', gu.ie8);
  // console.log('ie9: ', gu.ie9);
  // console.log('ie10: ', gu.ie10);
  // console.log('firefox: ', gu.firefox);
  // console.log('opera: ', gu.opera);
  // console.log('chrome: ', gu.chrome);
  // console.log('safari: ', gu.safari);

}( window, document ));