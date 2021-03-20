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
    console.log("max number is " + max);
    console.log("min number is " + min);
    console.log("avg number is " + avg);
}

var arr = [2, 7, 0, -2, 6, 15, 3,7,-8];
printMaxMinAvg(arr);

