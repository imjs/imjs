/**
 * scroll
 * 特定の位置へスクロール
 */
/*
o.addCommand(function (){

  var className = imjs.prefix + '-deleteSpace';
  var target = o.getElements('.' + className);

  var children = target[1].children;

  o.forEach(children, function (element, i) {
    var textNode = document.createTextNode('textNode');
    element.parentNode.insertBefore(textNode, element.nextSibling);
  });

  o.forEach(target, function (element, i) {

    var childNodes = o.makeArray(element.childNodes);

    for (var i = 0, l = childNodes.length; i < l; i++) {
      var node = childNodes[i];
      if (node.nodeType !== 1) {
        element.removeChild(node);
      }
    }

  });

});
*/

imjs.plugin.biggerLink = {
  hoverClass: 'hover'
};

o.addCommand(function (){

  var className = imjs.prefix + '-biggerLink',
      target = o.getElements('.' + className),
      hoverClass = imjs.plugin.biggerLink.hoverClass || 'hover';

  o.forEach(target, function (element, i) {

    //var style = a.currentStyle || document.defaultView.getComputedStyle(a, '');
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