$(document).ready(function () {
  updateIndividualColumns();

  $(window).on('resize', updateIndividualColumns);

  $('.donorlist__searchform__input').on('input', function() {
    let filter = $(this).val();

    console.log('here');
    updateIndividualColumns({text: filter});
  });

  $('[name=individual]').on('change', function() {
    let val = $(this).val();
    let filter = {
      lower: undefined,
      upper: undefined
    };

    // When one input has a value selected, make sure the same value is selected in the other.
    $('[name=individual]').val([val]);

    if(val === 'individual-00') {
      filter.upper = 99;
    } else if (val === 'individual-100') {
      filter.lower = 100;
      filter.upper = 249;
    } else if (val === 'individual-250') {
      filter.lower = 250;
      filter.upper = 499;
    } else if (val === 'individual-500') {
      filter.lower = 500;
      filter.upper = 999;
    } else if (val === 'individual-1000') {
      filter.lower = 1000;
      filter.upper = 2499;
    } else if (val === 'individual-2500') {
      filter.lower = 2500;
      filter.upper = 4999;
    } else if (val === 'individual-5000') {
      filter.lower = 5000;
      filter.upper = 9999;
    } else if (val === 'individual-10000') {
      filter.lower = 10000;
      filter.upper = 19999;
    } else if (val === 'individual-20000') {
      filter.lower = 20000;
      filter.upper = 49999;
    } else if(val === 'individual-50000') {
      filter.lower = 50000;
    }

    updateIndividualColumns(filter);

  });
});



function updateIndividualColumns(filterVals = {lower: undefined, upper: undefined, text: undefined}) {
  let itemCount = 20;

  if (window.innerWidth > 982) {
    itemCount = 40;
  } else if (window.innerWidth > 600) {
    itemCount = 30;
  }

  var names = new Array();

  for (var i = 0; i < 300; i++) {
    names.push({
      name: "Jason Mickela " + i,
      amount: i * 20
    });
  }



  names.push({
    name: "Marcia Adelman",
    amount: i * 20
  });
  names.push({
    name: "Craig Adelman",
    amount: i * 20
  });
  names.push({
    name: "Anonymous (3)",
    amount: i * 20
  });

  if(filterVals.lower !== undefined) {
    names = names.filter(function(item) {
      return item.amount >= filterVals.lower;
    });
  }

  if(filterVals.upper !== undefined) {
    names = names.filter(function(item) {
      return item.amount <= filterVals.upper;
    });
  }

  if(filterVals.text !== undefined) {
    names = names.filter(function(item) {

      return item.name.includes(filterVals.text);
    });
  }

  // If the slider is already enabled, destroy it.
  if ($('.donorlist__individual__cols__wrapper').hasClass('flickity-enabled')) {
    $('.donorlist__individual__cols__wrapper').flickity('destroy');
  }

  // Remove any existing children
  $('.donorlist__individual__cols__wrapper').empty();

  // Break array into max num chunks


  for (var j = 0; j < names.length / 10; j++) {
    var container = document.createElement('div');
    container.className = "donorlist__individual__col";

    $('.donorlist__individual__cols__wrapper').append(container);

    for (var i = 0; i < itemCount && names.length; i++) {
      var name = names.pop();
      $(container).append("<div>" + name.name + "</div>");
    }
  }

  $('.donorlist__individual__cols__wrapper').flickity({
    cellAlign: 'left',
    contain: true,
  });
}