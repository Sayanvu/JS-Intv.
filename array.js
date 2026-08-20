// function repeatedValues(n){
//     let val = 'hello';
//     let arr = [];
//     for (let index = 0; index < n; index++) {
//         arr.push(val)
//     }
//     console.log(arr);
// }

// repeatedValues(5);

// create an array using array.form

// function arrForm(){
//     return Array.from({length:6},((any,i)=>i*2))
// }
// console.log(arrForm());


// Convert a string "a,b,c,d" to an array.


// function conStr(str){
//     let arr = str.split(',');
//     console.log(arr);
// }
// conStr("a,b,c,d");

// Create an array from 1 to 100 using map().

// function createArrUsingMap(arr){
//     // return Array(100).fill(0).map((_,i)=>(i+1));
//     return new Array(5).fill("X")
// }

// console.log(createArrUsingMap([100]))



// function printArrayToEvenNumber(){
//     let data = Array(10).fill(0).map((_,i)=>(i+1)*2
//     );
//     return data;
// }

// console.log(printArrayToEvenNumber())


// function printPrimeNo(){
//     let data = Array(100).fill(0).map((_,i)=>i+1).filter(i=> ((i%i===0) && (i%2 !== 0)));
//     return data;
// }
// console.log(printPrimeNo());



//  Create An array of first n even no.

//  function evenNo(){
//     return new Array(10).fill(0).map((_,i)=>i*2);
//  }

//  console.log(evenNo())


// Create an array length 5 without fill()
// function newArrayFilling(n){
//     // return Array.from({length:10})
//     return [...Array(5)];
// }

// console.log(newArrayFilling(10))


// check is the variable is array or not.

// function varArrayOrNot(n){
//     return Array.isArray(n);
// }

// console.log(varArrayOrNot([2,3,5,10]));
// console.log(varArrayOrNot(10));


// Clone an array without affecting the original.

// function cloneArray(arr){
//     for (const element of arr) {
//         console.log(element);
//     }
// }
// console.log(cloneArray([12,2,33,10,1]));


// function testForEach(arr){
//     return arr.forEach((ele,index)=>{
//         console.log(`Element Found In The Location is ${ele} Index is ${index}`);
//     })
// }

// testForEach([10,20,30,40,50]);




// Use map() to square each number in [1,2,3,4].

// function squreUsingMap(arr){
//     return arr.map((i)=>i*i);
// }

// console.log(squreUsingMap([2,22,11,4,7,9]));


// function printEvenNumberUsingForeach(n){
//     return n.forEach((ele)=>{
//         if(ele % 2 === 0){
//             console.log(`Even Number is ${ele}`);
//         }
//     })
// }

// printEvenNumberUsingForeach([10,21,32,43,54,65,76,87,98]);

// Create a new array with lengths of each string in ["hi", "hello", "world"].


// function lengthOfString(arr){
//     return arr.map(arr=>arr.length);
// }
// console.log(lengthOfString(["hi", "hello", "world"]));


// Use forEach() to find the sum of all numbers
// function sumOfAllNumberUsingForEach(arr){
//     let sum = 0;
//     arr.forEach(element => {
//          sum += element;
//     });
//     return sum;
// }
// console.log(sumOfAllNumberUsingForEach([2,4,5,7]))

// Use map() to convert all strings to uppercase.
// function convertStringToUpperCase(arr){
//     return arr.map((item)=>item.toUpperCase());
// }

// console.log(convertStringToUpperCase(['hello','kkssaa']))


function reverseAnarray(arr){
    let array=[]
    for (let index = arr.length-1; index >= 0; index--) {
        array.push(arr[index]);
    }
    return array;
}
console.log(reverseAnarray(['hello','wellcome','to', 'Bengal']))