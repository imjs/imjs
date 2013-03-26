/**
 * biggerLink
 * aタグの親要素をクリッカブルにする
 */

imjs.conf.plugin.biggerLink = {
  hoverClass: 'hover'
};

imjs.addCommand(function (){

  var className = imjs.conf.prefix + '-biggerLink',
      target = imjs.getElements('.' + className),
      hoverClass = imjs.conf.plugin.biggerLink.hoverClass || 'hover';

  imjs.forEach(target, function (element, i) {

    var a = imjs.getElements('a', element)[0];
    element.style.cursor = 'pointer';

    imjs.on(element, 'click', function () {
      ( a.getAttribute('target') )?
        window.open(a.href):
        location.href = a.href;
    });

    imjs.on(element, 'mouseover', function () {

      imjs.addClass(element, hoverClass);

    });

    imjs.on(element, 'mouseout', function () {

      imjs.removeClass(element, hoverClass);

    });

  });

});