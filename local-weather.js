$(document).ready(function(){

  $('.celcius').hide();

  $('.fahrenheit, .celcius').on('click',function(){
    $('.fahrenheit, .celcius').toggle();
  });

  function convertToFahrenHeit(C){
    return C * (9/5) + 32;
  }

  var x = document.getElementById("weather");

  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;

    $.ajax({
      type: 'GET',
      url: url,
      success: function(data){
        $('.card-title').html(data.name + ", " + data.sys.country);
        $('.celcius').html((data.main.temp).toFixed(1) + "&deg;C");
        $('.fahrenheit').html((convertToFahrenHeit(data.main.temp)).toFixed(1) + "&deg;F");
        $('.weather-desc').html(data.weather[0].description);
        $('.weather-icon').html('<img src="' + data.weather[0].icon + '" />');
      }
    });
}
getLocation();

});
