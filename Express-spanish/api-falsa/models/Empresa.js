const faker = require("faker");
const crypto = require("crypto");

const numGen = (num) => { return(
  Math.floor(Math.random() * num));
};
const generateRut = () => {
  return `${numGen(3)}${numGen(10)}.${numGen(1000)}.${numGen(1000)}-${numGen(10)}`
}

class Empresa {
  constructor() {
    this._id = generateRut();
    this.nombre = faker.company.companyName();
    this.direccion = {
      calle: faker.address.streetName(),
      ciudad: faker.address.city(),
      provincia: faker.address.state,
      postal: faker.address.zipCode(),
      pais: faker.address.city,
    };
  }
}

module.exports = Empresa;
