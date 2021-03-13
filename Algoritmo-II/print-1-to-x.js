function printUpTo(x) {
  if (x > 0) {
    for (i = 1; i <= x; i++) {
      console.log(i);
    }
  } 
  else if (x = 0) {
    console.log("número cero");
    return "false";
  } 
  else {
    console.log("número negativo");
    return "false";
  }
}
printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10); // debería imprimir false
console.log(y); // debería imprimir false
y = printUpTo(0);
console.log(y);