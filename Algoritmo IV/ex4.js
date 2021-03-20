function removerRango(arr, b, c) {
  for (var i = b; i <= c; i++) {
    arr.splice(b,1);
  }
  return arr;
}

var newArr = removerRango([20, 30, 40, 50, 60, 70], 2, 4);
console.log(newArr);
