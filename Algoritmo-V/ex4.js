function repetir(arrB) {
  var newArr = [];
  for (i = 0; i < arrB.length; i++) {
    newArr.push(arrB[i]);
    newArr.push(arrB[i]);
  }
  return newArr;
}

arr = [1, 2, 3, 4, 5];
console.log(repetir(arr));
