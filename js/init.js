(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $("#toggle1").flip();
    $("#toggle2").flip();
    $("#toggle3").flip();
    $("#toggle4").flip();
    $(".survole").hide();
    $('.titre').fadeIn("slow");
    $('#phrase-accroche').fadeIn("slow");


  }); // end of document ready
})(jQuery); // end of jQuery name space

function initMap() {
    var uluru = {lat: 50.435135, lng: 2.823492};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }