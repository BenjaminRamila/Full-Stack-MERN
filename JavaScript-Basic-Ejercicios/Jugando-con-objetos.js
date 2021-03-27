// - - 1 - -

var users = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "David", age: 27 },
];

console.log(users[1].age);
// - - 2 - -
var users = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "David", age: 27 },
];

console.log(users[1].name);
// - - 3 - -

function printNameAge(objArr) {
  for (var people in objArr) {
    console.log(
      "The user " +
        objArr[people].name +
        " is " +
        objArr[people].age +
        " years old"
    );
  }
}

var users = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "David", age: 27 },
];

printNameAge(users);
// - - 4 - -

function printNameAdult(objArr) {
  for (var people in objArr) {
    if (objArr[people].age > 18) {
      console.log(objArr[people].name + " is old enough.");
    }
  }
}

var users = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "Benjamin", age: 17 },
  { name: "David", age: 27 },
];

printNameAdult(users);
