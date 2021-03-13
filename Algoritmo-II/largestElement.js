function findLargestElement(arr) {
    var largestElement = arr[0];
    for (var i=1; i<arr.length; i++){
        if (arr[i] > largestElement){
            largestElement = arr[i];
        }
    }
    return largestElement;
}

console.log(findLargestElement([1,30,5,7])); //debería imprimir 30