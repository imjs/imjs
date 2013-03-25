imjs.conf.plugin.addClassToTable = {
  even: 'even',
  odd: 'odd'
}

/**
 * addClassToTable
 * テーブルの列にクラスを追加する
 */
imjs.addCommand(function addClassToTable(){

  var nodes = imjs.getElements('table');

  imjs.forEach(nodes, function (el, i) {
    var rClassName = new RegExp(imjs.conf.prefix + '-addClass');
    if(el.className.match(rClassName)){
        var dataEven = this.getAttribute('data-even');
        var dataOdd = this.getAttribute('data-odd');
        var even = (dataEven) ? dataEven : imjs.conf.plugin.addClassToTable.even;
        var odd = (dataOdd) ? dataOdd : imjs.conf.plugin.addClassToTable.odd;
        var trArr = imjs.getElements('tr', el);
        var length = trArr.length;
        for (var i = 0; i < length; i ++){
            var tr = trArr[i];
            var cn;
            if (i % 2 === 0) {
                imjs.addClass(tr, even);
            } else {
                imjs.addClass(tr, odd);
            }
        }
    }
  });

});
