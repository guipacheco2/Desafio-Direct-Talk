window.setTimeout(function(){
    var mercedes = {
        Id:"105",
        Title:"Mercedes SLK",
        Year:"2007",
        Price:"12000.33"
    };
    window.Cars.append(mercedes);
    window.Cars.remove("102");
}, 5000);

(function($) { 'use strict';

  var Cars = function(el) {
    this.$el = $(el);
  };

  Cars.prototype.append = function(car) {
    var html;

    if (! car.Id || ! car.Title || ! car.Year || ! car.Price) {
      return false;
    };

    html = this.createHtml(car);
    this.$el.append(html);
  };

  Cars.prototype.remove = function(id) {
    $(document.getElementById('car-' + id)).remove();
  };

  Cars.prototype.createHtml = function(car) {
    var elA, elH4, elP;

    elA = document.createElement('a');
    elA.id = 'car-' + car.Id;
    elA.href = '#';
    elA.className = 'list-car-item';

    elH4 = document.createElement('h4');
    elH4.className = 'list-car-item-heading';
    elH4.innerHTML = car.Title + ', ' + car.Year;

    elP = document.createElement('p');
    elP.className = 'list-car-item-text';
    elP.innerHTML = '$ ' + car.Price;

    elA.appendChild(elH4);
    elA.appendChild(elP);
    return elA;
  };

  $(function() {
    window.Cars = new Cars(document.getElementById('list-cars'));
  });

})(jQuery);