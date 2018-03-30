'use strict'

$(document).ready(function(){
  
  $('#js-ajax-atocomplete').on('keyup',function(){
    console.log("on keyup:" + $(this).val());
  });

  //jquery global settings
  $(document).ajaxStart(function(){
      console.log("Global setting for each ajax request");
      // ManageControls(true);
  });

  $(document).ajaxComplete(function(){
    console.log("Global setting for each ajax request complete");
    // ManageControls(false);
  });

  setInterval(function() {
      $.ajax({
        url: "https://blockchain.info/ticker",
        beforeSend: function(xhr) {
          // $("#js-ticker").append("Trying to receive JSON data in a background from blokchain.info");
          
          console.log("Ajax call requested");
        }
      }).done(function(data) {
          //deseralize our data from JSON to HTML
          //write info to div on the page
          setTimeout(function(){},1000 * 3);
          $('#js-ticker').append('<div>' + data.USD.last + " " + data.USD.symbol + '</div>')

          if (console && console.log) {
            console.log("Retrived JSON data:", data);
          }
      }).fail(function() {
          console.log("Ajax Error occured");
      });
  }, 1000 * 5);

  function ManageControls(enableFlag){
    $('#js-controls').find('input, textarea, button, select').attr('disabled',enableFlag);
    console.log("Controls state: " + enableFlag);
  }
});

