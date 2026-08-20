let arr = [1,3,4,2,3,8,1,4]; 
let th=6;


function filterArray(arr, th) {
    let result = [];
    let collectedData = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > th) {
            result.push(collectedData);
            collectedData = [];
        }
        else if(collectedData.length) {
            result.push(collectedData);
            collectedData = [];
            collectedData.push(arr[i]);
        }
        else {
            collectedData.push(arr[i]);
        }
    }
    return result;
}

let filteredArr = filterArray(arr, th);
console.log(filteredArr);