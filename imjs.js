/**
 * @fileOverview imjs JavaScript Library
 * @name imjs.js || im.js
 * @version 1.0.0 2012.12.26 Creating New File
 * @namespace global namespace [imjs, o]
 */

(function( window, undefined ) {

  var doc = document;

  var imjs = {

    commands: [],

    addCommand: function(cmd, noReady) {

      if (noReady) {
        cmd();
        return;
      }

      this.commands.push(cmd);

    },

    fire: function() {

      for (var i = 0, l = this.commands.length; i < l; i++) this.commands[i]();

    }

  };

  imjs.extend = function(target, object) {

    for (var i in object) {

      target[i] = object[i];
      
    }

  };

  imjs.extend(imjs, {

    ready: function(callback) {

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

        doc.onreadystatechange = function() {
          if (doc.readyState == 'complete') {
            doc.onreadystatechange = null;
            done();
          }
        };

      }

    },

    getElements: function(selectors) {

      var array = [];

      if (typeof selector === 'object') {

        array = [selectors];

      }

      if (typeof selectors === 'string') {

        if (doc.querySelectorAll) {

          selectors = doc.querySelectorAll(selectors);

          for (var i = 0, l = selectors.length; i < l; i++) {
            array[i] = selectors[i];
          }

        } else {

          if (/^#/.test(selectors)) {

            array = [doc.getElementById(selectors.replace(/^./, ''))];
            
          } else if ( /^\./.test(selectors) ) {

            selectors = selectors.replace(/^\./, '');

            var all = doc.getElementsByTagName('*'),
                reg = new RegExp('\\b' + selectors + '\\b');

            for (var i = 0, j = 0, l = all.length; i < l; i++) {
              if (reg.test(all[i].className)) {
                array[j] = all[i];
                j++;
              }
            }

          } else {

            selectors = doc.getElementsByTagName(selectors);

            for (var i = 0, l = selectors.length; i < l; i++) {
              array[i] = selectors[i];
            }

          }

        }

      }

      return array;

    },

    forEach: function(object, callback) {

      for (var i = 0, l = object.length; i < l; i++) {

        var thisObject = object[i];

        callback.call(thisObject, thisObject, i);

      }

    },

    on: function(target, type, callback) {

      if ( doc.addEventListener ) {

        for ( var i = 0, l = target.length; i < l; i++ ) {
          target[i].addEventListener(type, callback, false);
        }

      } else {

        for ( var i = 0, l = target.length; i < l; i++ ) {
          target[i].attachEvent( 'on' + type, function(e) {
            callback.call(e.srcElement);
          });
        }

      }

    },

    css: function(selectors, properties) {

      for (var i in properties) {
        selectors.style[i] = properties[i];
      }

    },

    getDeviceFromUa: function() {

      var ua = window.navigator.userAgent.toLowerCase();
      var deviceType = {
        iphone:       false,
        android:      false,
        windowsphone: false,
        ipad:         false,
        androidtab:   false,
        pc:           false
      }
      
      if((ua.indexOf('iphone') > -1 && ua.indexOf('ipad') == -1) || ua.indexOf('ipod') > -1) deviceType.iphone = true; //iPhone&iPod
      else if(ua.indexOf('android') > -1 && ua.indexOf('mobile') > -1) deviceType.android = true; //AndroidMobile(一部のタブレット型アンドロイドを含む)
      else if(ua.indexOf('windows phone') > -1) deviceType.windowsphone = true; //WindowsPhone
      else if(ua.indexOf('ipad') > -1) deviceType.ipad = true; //iPad
      else if(ua.indexOf('android') > -1) deviceType.androidTab = true; //AndroidTablet
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

        if(typeof window.addEventListener == 'undefined' && typeof document.getElementsByClassName == 'undefined') {//mediaQueryに対応していないブラウザ(lteIe8)は除外
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

    getBrowserFromUa: function() {

      var ua = window.navigator.userAgent.toLowerCase();
      var ieVersion = ua.slice(ua.indexOf('msie ')+'msie '.length,ua.indexOf('msie ')+'msie '.length+1);
      var browserType = {
        lteIe6:  false,
        lteIe7:  false,
        lteIe8:  false,
        ie:      false,
        ie6:     false,
        ie7:     false,
        ie8:     false,
        ie9:     false,
        ie10:    false,
        firefox: false,
        opera:   false,
        chrome:  false,
        safari:  false,
        other:  false
      }

      if (ieVersion < 7) browserType.lteIe6 = true;
      else if(ieVersion < 8) browserType.lteIe7 = true;
      else if(ieVersion < 9) browserType.lteIe8 = true;
      else if(ieVersion < 10) browserType.lteIe9 = true;
      else if(ua.indexOf('msie') > -1) browserType.ie = true;
      else if(ua.indexOf('msie 6.') > -1) browserType.ie6 = true;
      else if(ua.indexOf('msie 7.') > -1) browserType.ie7 = true;
      else if(ua.indexOf('msie 8.') > -1) browserType.ie8 = true;
      else if(ua.indexOf('msie 9.') > -1) browserType.ie9 = true;
      else if(ua.indexOf('msie 10.') > -1) browserType.ie10 = true;
      else if(ua.indexOf('firefox') > -1) browserType.firefox = true;
      else if(ua.indexOf('opera') > -1) browserType.opera = true;
      else if(ua.indexOf('chrome') > -1) browserType.chrome = true;
      else if(ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1) browserType.safari = true;
      else browserType.other = true;

      return browserType;

    },

    getBrowserFromSupport: function() {

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

    }

  });

  window.o = window.imjs = imjs; // export. shotrcut = o

// o.commands();
// o.addCommand();
// o.fire();
// o.extend(target, object);
// o.ready();
// o.getElements(selector);
// o.forEach(object, callback);
// o.on(target, type, callback);
// o.getDeviceFromUa();
// o.getDeviveFromSize();
// o.getBrowserFromUa();
// o.getBrowserFromSupport(); 

}( window ));