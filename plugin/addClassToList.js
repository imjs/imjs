imjs.conf.plugin.addClassToList = {
  even: 'even',
  odd: 'odd'
}

/**
 * addClassToList
 * リストのLIにクラスを追加する
 */
imjs.addCommand(function addClassToList(){

  setClass(imjs.getElements('ul'));
  setClass(imjs.getElements('ol'));

  function setClass(nodes){
      imjs.forEach(nodes, function (el, i) {
          var rClassName = new RegExp(imjs.conf.prefix + '-addClass');
          if(el.className.match(rClassName)){
              var dataEven = this.getAttribute('data-even');
              var dataOdd = this.getAttribute('data-odd');
              var even = (dataEven) ? dataEven : imjs.conf.plugin.addClassToList.even;
              var odd = (dataOdd) ? dataOdd : imjs.conf.plugin.addClassToList.odd;
              var liArr = imjs.getElements('li', el);
              var length = liArr.length;
              for (var i = 0; i < length; i ++){
                  var li = liArr[i];
                  var cn;
                  if (i % 2 === 0) {
                      imjs.addClass(li, even);
                  } else {
                      imjs.addClass(li, odd);
                  }
              }
          }
      });
  }

});
