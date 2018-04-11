'use strict'

//global map of results
let autoCompleteResultsMap = new Map();

$(document).ready(function(){
  $('#js-ajax-atocomplete').on('keyup',function(e){
    console.log("on keyup:" + $(this).val());

    //detect 'Esc' button
    if(e.keyCode == 27){
      $("#js-autocoplete-sugestions").hide('slow');
    }
    else{
      $.ajax({
        url: "https://blockchain.info/ticker",
        beforeSend: function(xhr) {        
          console.log("Ajax call requested");
        }
      }).done(function(data) {
          for(let itm in data)
            autoCompleteResultsMap.set(itm.toString(), data[itm]);

          if(autoCompleteResultsMap.size > 0){
            let valueSearch = $("#js-ajax-atocomplete").val().toUpperCase();
            let keys = Array.from( autoCompleteResultsMap.keys() );

            $("#js-autocoplete-sugestions").html("");
            $("#js-autocoplete-sugestions").append(
              $('<ul>').append(
                  keys.filter(function(itm){
                    return itm.toUpperCase().includes(valueSearch)
                  }).map(itm => 
                    $("<li>").html($("<a href='#'>").text(itm)))                
              )
            ).show();
          }
          $("#js-autocoplete-sugestions").show('slow');

      }).fail(function() {
          console.error("Ajax Error occured");
      });
    }

  });

  $("#js-autocoplete-sugestions").on("click", function(e){
		$("#js-regularControl").val(e.target.text);
		$("#js-autocoplete-sugestions").hide('slow');
  });

});

function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

