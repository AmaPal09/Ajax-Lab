"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    // $.get('/fortune', (results) => {

    //   const fortune = results;
    //   $('#fortune-text').html(fortune);
    //   console.log('Got result from server')
    // });

    $("#fortune-text").load('/fortune');

}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    // let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info
    //serialize only works for get methods because they take a query string
    $.get(url, $("#weather-form").serialize(), (results) => {
      const weather = results.forecast;
      $("#weather-info").html(weather);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    const url = "/order-melons.json";
    let formData = {'qty': $("#qty-field").val(), 
                    'melon_type':$("#melon-type-field").val()};

    $.post(url, formData, (results) => {

      console.log(results);
      const code = results.code;
      const msg = results.msg;

      if( code === 'ERROR'){
        $("#order-status").addClass("order-error");
      }
      else {
        $("#order-status").removeClass("order-error");
      }

      $("#order-status").html(msg);
    });


    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


