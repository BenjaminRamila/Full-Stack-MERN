$("form").submit(function () {
  var cityName = document.getElementById("laciudad").value;
  $.get(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&units=imperial&APPID=e937de61d8e0fedb571487229f0791bf",
    function (res) {
      var output = "";
      output +=
        "<p>" +
        res.name +
        ": " +
        res.weather[0].description +
        "</p>" +
        "<p>Temperature: " +
        res.main.temp +
        "</p>" +
        "<p>Coord: " +
        res.coord.lat +
        ", " +
        res.coord.lon;

      document.getElementById("outputText").innerHTML = output;
    },
    "json"
  );
  return false;
});
