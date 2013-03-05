o.addCommand(function () {

  o.forEach(o.getElements('p'), function(element, i) {
    this.style.color = 'blue';
  });

  o.forEach(o.getElements('.i'), function(element, i) {
    this.style.color = 'green';
  });

  o.forEach(o.getElements('#imj'), function(element, i) {
    o.css(this, {
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: '200%'
    });
  });

});