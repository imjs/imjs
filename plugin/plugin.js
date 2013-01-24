o.ready(function() {

	// DOMContentLoaded を待つ場合（デフォルト）
	// fireのタイミングで実行
  o.addCommand(function() {

    o.forEach(o.getElements('p'), function(element, i) {
      this.style.color = 'blue';
    });

  });

  o.addCommand(function() {

    o.forEach(o.getElements('.i'), function(element, i) {
      this.style.color = 'green';
    });

  });

  o.addCommand(function() {

    o.forEach(o.getElements('#imj'), function(element, i) {
      o.css(this, {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: '200%'
      });
    });

  });

  // DOMContentLoaded を待たない場合
  // addCommandした瞬間に実行
  o.addCommand(function() {

  	//console.log('hoge');

  }, true);


  // 実行
  o.fire();

});