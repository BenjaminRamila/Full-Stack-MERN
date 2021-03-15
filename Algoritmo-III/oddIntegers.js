function returnOddArray(x) {
  // your code here
  arr = [];
  for (var i = 1; i <= x; i = i + 2) {
    arr.push(i);
  }
  return arr;
}
y = returnOddArray(255);
console.log(y); // should log [1,3,5,...,253,255]
