var repetitions = 151;

for (var i = 1; i <= repetitions; i++) {
  document.getElementById("pokemones").innerHTML +=
    "<img class='imgPokes' id='"+i+"' src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    i +
    ".png>";
  
}

$( "img,pokemones" ).click(function() {
    var num = this.id;
    document.getElementById("pokeImg").innerHTML =  "<img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    num +
    ".png>";
    // console.log('clicked');

    $.get("https://pokeapi.co/api/v2/pokemon/"+this.id, function(res) {
    console.log(res);

    document.getElementById("pokeName").innerHTML = res.name;
    var html_str = "";
    html_str += "<ul>"; 
                    for(var i = 0; i < res.types.length; i++) {
                        html_str += "<li>" + res.types[i].type.name + "</li>";
                    }
                    html_str += "</ul>";
    document.getElementById("types").innerHTML = html_str;
    document.getElementById("height").innerHTML = res.height;
    document.getElementById("weight").innerHTML = res.weight;





}, "json");


  });






  $.get("http://pokeapi.co/api/v2/pokemon/", function(res) {
    console.log(res.results[0]);
}, "json");