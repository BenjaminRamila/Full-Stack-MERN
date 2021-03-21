// - - 1 - - 

for (var i = 1; i<256; i++){
console.log(i);
}

// - - 2 - - 

for (var i = 2; i<1001; i+=2){
    console.log(i);
    }

// - - 3 - - 

sum = 0;
for (var i = 1; i<5000; i+=2){
sum += i;
}
console.log(sum);

// - - 4 - - 

function sumArray(arr){
    var sum = 0;
    for (var i = 0; i<arr.length; i++){
        sum += arr[i];


    }
    return sum;
}
console.log(sumArray([-5,2,5,12]));

// - - 5 - - 

arr = [-3,3,5,7]
console.log(Math.max(...arr));

// - - 6 - - 

function avg(arr){
    var sum = 0;
    for (var i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    var avg = sum / arr.length;
    return avg;
}
console.log(avg([1,3,5,7,20]));

// - - 7 - - 

var arr = [];
for (i=1; i<50; i+=2){
    arr.push(i);
}
console.log(arr);

// - - 8 - - 

function GreaterThan(arr, bigNum) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > bigNum) {
        count += 1;
      }
    }
    return count;
  }
  var arr =  [1,3,5,7];
  var y = 3;
  console.log(GreaterThan(arr, y));

// - - 9 - - 

function squareValue(x) {
    for (var i = 0; i < x.length; i++) {
      x[i] = x[i] * x[i];
    }
    return x;
  }
  y = squareValue( [1,5,10,-2] );
  console.log(y); 

// - - 10 - - 

function negativeToZero(arrB) {
    for (var i = 0; i < arrB.length; i++) {
      if (arrB[i] < 0) {
        arrB[i] = 0;
      }
    }
    return arrB;
  }
  var arr = [1,5,10,-2];
  var imprimir = negativeToZero(arr);
  console.log(imprimir);

// - - 11 - - 
  

  function printMaxMinAvg (arr){
    var max = arr[0];
    var min = arr[0];
    var avg = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        else if (arr[i] > max){
            max = arr[i];
        }
        avg = avg + arr[i];

    }
    avg = avg/arr.length;
    console.log(max);
    console.log(min);
    console.log(avg);
}

var arr = [1,5,10,-2];
printMaxMinAvg(arr);

// - - 12 - - 

function swapExtremes(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}
console.log(swapExtremes([1,5,10,-2]));

// - - 13 - - 

function dojify(arr){
    for (i=0;i<arr.length;i++){
        if (arr[i]<0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

console.log(dojify([-1,-3,2]));