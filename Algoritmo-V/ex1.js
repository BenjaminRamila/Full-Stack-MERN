function negativeToZero(arrB) {
  for (var i = 0; i < arrB.length; i++) {
    if (arrB[i] < 0) {
      arrB[i] = 0;
    }
  }
  return arrB;
}
var arr = [1, 2, -1, -3];
var imprimir = negativeToZero(arr);
console.log(imprimir);
