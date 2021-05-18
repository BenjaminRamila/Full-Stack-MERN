const faker = require("faker");
const crypto = require("crypto");

const numGen = (num) => { return(
  Math.floor(Math.random() * num));
};
const generateRut = () => {
  return `${numGen(3)}${numGen(10)}.${numGen(1000)}.${numGen(1000)}-${numGen(10)}`
}

class Usuario {
  constructor() {
    this._id = generateRut();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

module.exports = Usuario;
