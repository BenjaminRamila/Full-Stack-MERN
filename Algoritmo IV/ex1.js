function GreaterThan(arr, bigNum) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > bigNum) {
      count += 1;
      console.log(arr[i]);
    }
  }
  return count;
}
var arr = [2, 7, 0, -2, 60, 5, 3];
var y = 3;
console.log("The number of greater values is " + GreaterThan(arr, y));
