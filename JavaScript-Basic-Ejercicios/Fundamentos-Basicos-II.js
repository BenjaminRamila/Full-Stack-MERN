// - - 1 - -

function bigify(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = "big";
    }
  }
  return arr;
}

console.log(bigify([-1, 3, 5, -5]));

// - - 2 - -
function printLowReturnHigh(arr) {
  console.log(Math.min(...arr));
  return arr[arr.length - 1];
}
arr = [-3, 3, 5, 7];
console.log(printLowReturnHigh(arr));

// - - 3 - -

function printPenultimoReturnFirstOdd(arr) {
  console.log(arr[arr.length - 2]);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return arr[i];
    }
  }
}
console.log(printPenultimoReturnFirstOdd([2, 1, 5, 8, 6, 0, 3, -4]));

// - - 4 - -

function squareValue(x) {
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i] * x[i];
  }
  return x;
}
y = squareValue([1, 2, 3]);
console.log(y);

// - - 5 - -

function contarPositivos(arr) {
  sum = 0;
  for (var i = 0; i < x.length; i++) {
    if (arr[i] > 0) {
      sum++;
    }
  }
  arr(arr.length - 1) = sum;
  return arr;
}

console.log(contarPositivos([-1, 1, 1, 1]));

// - - 6 - -

function threeParity(arr) {
  for (var i = 2; i < arr.length; i++) {
    if (arr[i - 2] % 2 !== 0 && arr[i - 1] % 2 !== 0 && arr[i] % 2 !== 0) {
      console.log("¡Qué imparcial!");
    } else if (
      arr[i - 2] % 2 === 0 &&
      arr[i - 1] % 2 === 0 &&
      arr[i] % 2 === 0
    ) {
      console.log("¡Es para bien!");
    }
  }
}

threeParity([1, 9, 1, 3, 2, -2]);

// - - 7 - -
function plusOne(arr) {
  var newArr = arr.map(function (x, y) {
    if (y % 2 !== 0) {
      x += 1;
    }
    return x;
  });
  return newArr;
}

console.log(plusOne([1, 9, 1, 3, 2, -2]));

// - - 8 - -

function longitudesPrevias(arr){
  for (var i = arr.length-1 ;i > 0 ; i--){
    arr[i] = arr[i-1].length;
  }
 return arr;
}

const arr1 = ['programar','dojo', 'genial'];
console.log(longitudesPrevias(arr1));



// - - 9 - -
var arr = [1, 76, 8, 5, 2, 3, 5, 4];

arr.forEach(function (x, y, z) {
  arr[y] = x + 7;
});

console.log(arr);
// - - 10 - -
function reverse(arr) {
  arr = arr.reverse();
  return arr;
}
var arr = [3, 1, 6, 4, 2];
console.log(reverse(arr));
// - - 11 - -
function negatron(arr) {
  negArr = arr.map(function (x) {
    if (x > 0) {
      x = x * -1;
    }
    return x;
  });
  return negArr;
}
var arr = [3, -1, -6, 4, 2, 0];
console.log(negatron(arr));
// - - 12 - -
function hungry(arr) {
  let newArr = [];
  let yummyCount = 0;

  arr.forEach(function (x) {
    if (x === "comida") {
      newArr.push("yummy");
      yummyCount++;
    } else {
      newArr.push(x);
    }
  });
  if (yummyCount > 0) {
    return newArr;
  } else return "tengo hambre";
}

arr = ["comida", "pizza", "sushi", "comida", "perro"];
console.log(hungry(arr));
arr = ["no", "pizza", "sushi", "nose", "perro"];
console.log(hungry(arr));
// - - 13 - -

function swapThings(arr) {
  let temp = arr[0];
  let mitad = [];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  if (arr.length % 2 === 0) {
    mitad = arr.length / 2;
  } else {
    mitad = (arr.length - 1) / 2;
  }
  let temp2 = arr[mitad];
  arr[mitad] = arr[mitad - 1];
  arr[mitad - 1] = temp2;

  return arr;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(swapThings(arr1));
console.log(arr1);

// - - 14 - -

function multiplyBy(arr, num) {
  newArr = arr.map(function (x) {
    return x * num;
  });
  return newArr;
}
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(multiplyBy(arr1, 3));
