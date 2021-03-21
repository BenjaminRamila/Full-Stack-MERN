function moverAdelante(arrB) {
  arrB.splice(0, 1);
  arrB.push(0);
  return arrB;
}

arr = [1, 2, 3, 4, 5];
console.log(moverAdelante(arr));
