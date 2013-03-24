/**
 * biggerLink
 * aタグの親要素をクリッカブルにする
 */

imjs.plugin.biggerLink = {
  hoverClass: 'hover'
};

o.addCommand(function (){

  var className = imjs.prefix + '-biggerLink',
      target = o.getElements('.' + className),
      hoverClass = imjs.plugin.biggerLink.hoverClass || 'hover';

  o.forEach(target, function (element, i) {

    var a = o.getElements('a', element)[0];
    element.style.cursor = 'pointer';

    o.on(element, 'click', function () {
      ( a.getAttribute('target') )?
        window.open(a.href):
        location.href = a.href;
    });

    o.on(element, 'mouseover', function () {

      o.addClass(element, hoverClass);

    });

    o.on(element, 'mouseout', function () {

      o.removeClass(element, hoverClass);

    });

  });

});