function sumOfArray(arr){
    if(arr.length === 0){
        return 0;
    }
    else{
        return sumOfArray(arr.slice(1)) + arr[0];
    }
}

console.log(sumOfArray([2,4,1,5,25,52]))
