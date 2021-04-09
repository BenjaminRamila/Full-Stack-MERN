class Carta {
  constructor(nombre, costo) {
    this.nombre = nombre;
    this.costo = costo;
  }
}

class Unidad extends Carta {
  constructor(nombre, costo, poder, res) {
    super(nombre, costo);
    this.poder = poder;
    this.res = res;
  }

  atacar(objetivo) {
    if (!(objetivo instanceof Unidad))
      throw Error("Sólo puedes atacar a otra Unidad!");
    objetivo.res = objetivo.res - this.poder;
  }
}

class Efecto extends Carta {
  constructor(nombre, costo, texto, stat, magnitud) {
    super(nombre, costo);
    this.texto = texto;
    this.stat = stat;
    this.magnitud = magnitud;
  }
  aplicar(recipiente) {
    if (!(recipiente instanceof Unidad))
      throw Error("Sólo puedes aplicar a una Unidad!");
    recipiente[this.stat] += this.magnitud;
    console.log("\x1b[33m%s\x1b[0m",this.texto);
  }
}
// - - - MAKING CARDS

const redBelt = new Unidad("Ninja Cinturón Rojo", 3, 3, 4);
const blackBelt = new Unidad("Ninja Cinturón Negro", 4, 5, 4);

const incrementarRes = new Efecto(
  "Algoritmo Difícil",
  2,
  "Aumenta la resistencia del objetivo en 3",
  "res",
  3
);
const dimRes = new Efecto(
  "Rechazo de promesa no manejado",
  1,
  "Reduce la resistencia del objetivo en 2",
  "res",
  -2
);
const augPow = new Efecto(
  "Programación en pareja",
  3,
  "Aumenta el poder del objetivo en 2",
  "poder",
  +2
);
// cuenta turnos aqui abajo!

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log("- - - - - - - turno " + count + " - - - - - - -");
  }
  return inner;
}
const turno = outer(); 

// - - - - - - - - - PLAYING TIME ! ! !
function logBlue(text){
  console.log("\x1b[34m%s\x1b[0m",text);
} 
turno(); 
console.log("\x1b[34m%s\x1b[0m",'El jugador 1 convoca a "Ninja Cinturón Rojo"');
console.table({redBelt});
logBlue('El jugador 1 juega "Algoritmo Difícil" en "Ninja Cinturón Rojo"');
incrementarRes.aplicar(redBelt);
console.table({redBelt});
turno(); 
logBlue('El jugador 2 convoca a "Ninja Cinturón Negro"');
console.table({blackBelt});
logBlue('El jugador 2 juega "Rechazo de promesa no controlada" en "Ninja Cinturón Rojo"');
dimRes.aplicar(redBelt);
console.table({redBelt});
turno();
logBlue('El jugador 1 juega "Programación en pareja" en "Ninja Cinturón Rojo"');
augPow.aplicar(redBelt);
console.table({redBelt});
logBlue('El jugador 1 ataca con su carta "Ninja Cinturón Rojo" a "Ninja Cinturón Negro"');
redBelt.atacar(blackBelt);
console.table({blackBelt});
logBlue('Ninja Cinturón Negro está muerto. El Jugador 1 es el vencedor!');