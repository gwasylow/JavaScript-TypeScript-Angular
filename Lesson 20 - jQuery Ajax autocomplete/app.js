'use strict'
let autoCompleteResultsMap = new Map();

$(document).ready(function(){
  
  $('#js-ajax-atocomplete').on('keyup',function(){
    console.log("on keyup:" + $(this).val());

    $.ajax({
      url: "https://blockchain.info/ticker",
      beforeSend: function(xhr) {        
        console.log("Ajax call requested");
      }
    }).done(function(data) {
        for(let itm in data)
          autoCompleteResultsMap.set(itm.toString(), data[itm]);
        
          $("#js-autocoplete-sugestions").append(
            $('<ul>').append($('<li>').text("xxx"))).show();

        if(autoCompleteResultsMap.size > 0){
          // $("#js-autocoplete-sugestions").append(
          // $('<ul>').append(
          //   autoCompleteResultsMap.keys(itm => 
          //     $("<li>").append($("<a>").text(itm))
          //   ))).show();
        }
    }).fail(function() {
        console.error("Ajax Error occured");
    });

  });

});

