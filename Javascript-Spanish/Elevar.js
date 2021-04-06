// 1
//given
var hello; //created var hello
console.log(hello); // logs undefined                               
hello = 'world'; // defined var hello

// 2
var needle = 'haystack'; //created and defined var needle
function test(){ // se eleva 
    var needle = 'magnet'; // se asigna el valor dentro del scope
    console.log(needle); //logs 'magnet'
}
test(); //runs function

// 3
var brendan = 'super cool'; //se crea y define la variable brendan
function print(){ //se crea y eleva (aunque nunca es llamada)
    brendan = 'only okay'; //se define brendan en el scope
    console.log(brendan); //logs 'only okay' si es que fuese llamada
}
console.log(brendan); //logs global var 'super cool'

// 4
var food = 'chicken'; //se crea y define var food
function eat(){ //se crea y eleva funcion eat()
    food = 'half-chicken'; //se define food en el scope
    console.log(food); //logs 'half-chicken' cuando es llamada
    var food = 'gone'; //se redefine food aunque no es llamada 
}
console.log(food); //logs 'chicken'
eat(); //se llama la funcion eat() la que imprime 'half chicken'

// 5
mean(); //se llama la funcion mean pero no existe
var mean = function() { //error al crearse una variable que es una funcion)
    food = "chicken"; 
    console.log(food); 
    var food = "fish";
    console.log(food);
}
console.log(food); //si loggeara, seria undefined, pero es error.

// 6
var genre = "disco"; // se crea, define y eleva var genre
console.log(genre); //logs 'disco'
function rewind() { //se crea y eleva la funcion rewind()
    genre = "rock"; //se redefine genre dentro del scope
    console.log(genre); //logs 'rock' cuando se llama rewind()
    var genre = "r&b"; //se redefine genre dentro del scope
    console.log(genre);//logs 'r&b' cuando se llama rewind()
}
rewind(); //se llama la funcion y logs 'rock', 'r&b'
console.log(genre); //logs 'disco', var global

// 7
dojo = "san jose"; //falta definirlo como var, let o const
function learn() { //se crea y eleva funcion learn()
    dojo = "seattle"; //se redefine dojo
    console.log(dojo); //logs 'seattle' cuando es llamada
    var dojo = "burbank"; //var es un error, ya esta definido
    console.log(dojo); //logs 'burbank' cuando es llamada
}
console.log(dojo); //loggearia 'san jose'
learn(); //se llama la funcion y loggea 'seattle','burbank'
console.log(dojo); //logs global var dojo 'san jose'

// 8 - Bonus ES6: const
function makeDojo(name, students){ //se crea y eleva funcion makeDojo()
    const dojo = {}; //se crea la const dojo como objeto vacio
    dojo.name = name; //se añade name al objeto, pero es un error ya que dojo es una CONSTANTE
    dojo.students = students; //lo mismo
    if(dojo.students > 50){ 
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo; //retornaria un objeto vacío 
}
console.log(makeDojo("Chicago", 65)); 
console.log(makeDojo("Berkeley", 0));