// - - 1 - -

function sigma(num) {
  let sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

input = 3;
console.log(sigma(input));

// - - 2 - -
function factorial(num) {
  let sum = 1;
  for (var i = 1; i <= num; i++) {
    sum = sum * i;
  }
  return sum;
}

input = 5;
console.log(factorial(input));
// - - 3 - -
function fibonacci(num) {
  if (num === 0) return 0;
  let j = 0;
  let k = 1;
  for (var i = 1; i <= num; i++) {
    sum = j + k;
    k = j;
    j = sum;
  }
  return sum;
}

input = 46;
console.log(fibonacci(input));
// - - 4 - -
function penultimo(arr) {
  if (arr.length < 2) return null;
  else {
    return arr[arr.length - 2];
  }
}

arr = [5, 2, 3, 6, 4, 9, 7];
console.log(penultimo(arr));
arr = [5];
console.log(penultimo(arr));

// - - 5 - -
function eneUltimo(arr, ene) {
  if (arr.length - 1 < ene) return null;
  else {
    return arr[arr.length - 1 - ene];
  }
}

arr = [5, 2, 3, 6, 4, 9, 7];
console.log(eneUltimo(arr, 4));
arr = [5];
console.log(eneUltimo(arr, 1));
// - - 6 - -
function casiMaxi(arr) {
  if (arr.length < 2) return null;
  else {
    arr.sort(function (a, b) {
      return a - b;
    });
    return arr[arr.length - 2];
  }
}

arr = [42, 1, 4, 3.14, 7, 54, 12, 100, -3];
console.log(casiMaxi(arr));
arr = [5];
console.log(casiMaxi(arr));
// - - 7 - -
function duplicateItems(arr) {
  newArr = [];
  arr.forEach(function (x) {
    newArr.push(x);
    newArr.push(x);
  });
  return newArr;
}

arr = [42, 1, 4, 3.14, 7, 54, 12, 100, -3];
console.log(duplicateItems(arr));
arr = [5];
console.log(duplicateItems(arr));
// - - 8 - -
