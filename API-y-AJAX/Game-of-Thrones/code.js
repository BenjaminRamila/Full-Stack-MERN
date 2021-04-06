$("img").click(function () {
  var houseNumber = $(this).attr("id");
  $(this).animate({
    left: '250px',
    opacity: '1',
  });
  $(this).siblings().animate({
    left: '250px',
    opacity: '0.2',
  });

  $.get(
    "https://anapioficeandfire.com/api/houses/" + houseNumber,
    function (res) {
      var titles = "";
      for (var i = 0; i < res.titles.length; i++) {
        titles += res.titles[i];
        if (i < res.titles.length - 1) {
          titles += ", ";
        }
      }
      titles += ".";
      document.getElementById(
        "houseDetails"
      ).innerHTML = `<p>Name: ${res.name} </p><p>Words: ${res.words} </p><p>Titles: ${titles}</p>`;
    },
    "json"
  );
});

// house 378 is Targaryen of kings landing
// 229 Lannister
// 362 Stark
// 16 baratheon
