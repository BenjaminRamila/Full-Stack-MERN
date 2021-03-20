function Dojoify(arrB){
    for (i=0;i<arrB.length;i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arrB;
}

arr = [1,2,-3,-5,5]
console.log(Dojoify(arr));