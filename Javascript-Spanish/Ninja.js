class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 10;
        this.velocidad = 3;
        this.fuerza = 3;
    }
        sayName(){
            console.log(this.nombre);
        }
        showStats(){

            const {nombre, salud, fuerza, velocidad} = this;
            return {nombre, salud, fuerza, velocidad};
            // console.log(this.nombre, this.fuerza, this.velocidad, this.salud);
        }
        drinkSake(){
            this.salud += 10;
        }
    
}

const ninja1 = new Ninja("Hyabusa");
module.exports = Ninja;

// ninja1.sayName();
// console.log(ninja1.showStats());
// ninja1.drinkSake();
// console.log(ninja1.showStats());