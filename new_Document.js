// Write a function greetUser that takes a name and a callback function. The callback should log "Hello, [name]!" to the console.

// function greetUser(name,callback){

//         let res=callback(name);
//         console.log("Result is:",res);
// };

// greetUser("username",function(data){
//     return `Hello, [${data}]!`
// });


// 2.Create a function fetchData that simulates an async call using setTimeout and invokes a callback once data is "fetched".


// function fetchData(callback){
//     setTimeout(() => {
//         callback();
//     }, 1000);
// }

// fetchData(function callback(){
//     console.log("Working Done!!")
// });


// 3.Callback with String Manipulation

// Write a function transformText that takes a string and a callback to convert the string to uppercase and log it.


// function transformText(string,callback){
//     setTimeout(() => {
//        let result = callback(string);
//        console.log("Result After Convert To Upper Case::",result);
//     }, 1000);
// }

// transformText("hello",function callback(string){
//     return string.toUpperCase();
// })

// 4.Array Map with Callback
// Write a function squareArray that takes an array of numbers and a callback to square each element.


// function squareArray(nums,callback){
//     setTimeout(() => {
//         let num = callback(nums);
//         console.log("Nums After COnvert Is:",num);
//     }, 1000);
// }

// squareArray([2,2,4,2,5,1],function convert(arr){return arr.map((a)=>a*a)});


// 5.Callback with Conditions

// Write a function checkEvenOdd that takes a number and calls a callback to check if the number is even or odd.

// function checkEvenOdd(num,callback){
//     setTimeout(() => {
//         let result = callback(num);
//         console.log("Result Is:",result);
//     }, 1000);
// }

// checkEvenOdd(11,function checkEO(num){
//     return num % 2 === 0 ? "Even" : "odd";
// });


// 6.Simple Timeout with Callback

// Create a function delayedLog that logs a message after a delay (using setTimeout) and calls a callback afterward.

// function delayedLog(callback){
//     setTimeout(() => {
//         console.log("message displayed!");
//         callback()
//     }, 1000);
// }

// delayedLog(function printCB(){
//     console.log("Helllo...");
// })



// 7.Basic Filter with Callback

// Write a function filterEvenNumbers that takes an array of numbers and a callback that filters out only even numbers.

// function filterEvenNumbers(arr,callback){
//     setTimeout(() => {
//         let result = callback(arr);
//         console.log("result is:",result);
//     }, 1000);
// }

// filterEvenNumbers([1,2,3,11,33,11,331,88],function filterCB(arr){
//     return arr.filter((f)=> f % 2 === 0);
// })

// 8.Callback for Summing Numbers

// Create a function sumNumbers that takes an array of numbers and a callback to sum them up.

// function sumNumbers(arr,callback){
//     setTimeout(() => {
//         let result = callback(arr);
//         console.log("Result after sumasion:",result);
//     }, 1000);
// }

// sumNumbers([2,44,1,22,9,8,7,3],function sumCB(arr){
//     return arr.reduce((a,b)=>a+b,0);
// })


// 9.Simple Callback Function with Arguments

// Write a function multiply that accepts two numbers and a callback that multiplies them.

// function multiply(a1,b1,callback){
//     setTimeout(() => {
//         let result = callback(a1,b1);
//         console.log("Result From The Function Is:",result);
//     }, 1000);
// }

// multiply(10,12,function mulCB(a,b){
//     return a * b
// })


                            // Medium Questions:
// 1.Async Data Fetch with Error Handling

// Create a function getUserData that simulates fetching user data from a server asynchronously using setTimeout and calls the callback with the user data.


// function getUserData(callback) {
//     setTimeout(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => {
               
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json(); 
//             })
//             .then(data => callback(data))  
//             .catch(error => console.error('Error fetching data:', error));  
//     }, 1000);
// }

// getUserData(function cb(res) {
//     console.log(res);  
// });

// 2.Nested Callbacks

// Write a function getUserPosts that first fetches user data, then fetches posts for that user. Both actions should be done using callback


// function getUserPosts(callback){
//     setTimeout(() => {
//         fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then(res=>{
//             if(!res.ok){
//                 throw new Error("An Error Ocurres");
//             }
//             return res.json();
//         })
//         .then(res=>{
//             console.log("user data is :",res);
//             fetch(`https://jsonplaceholder.typicode.com/posts?userId=${res.id}`)
//             .then(res=>{
//                 if(!res.ok){
//                     throw new Error("An Error Ocurres!");
//                 }
//                 return res.json();
//             }).then(post=>{
//                 console.log("User post is:",post);
//                 callback(post);
//             }).catch(error=>{
//                 console.error("Error Ocurres")
//             })
//         }).catch(error=>{
//                 console.error("Error Ocurres")})
//     }, 1000);
// }

// getUserPosts(function callBack(fun){
//     console.log("Post:",post);
// })


// 3.Callback to Format Date

// Write a function formatDate that takes a date object and a callback to format the date as MM-DD-YYYY.

// function formatDate(date,callBack){
    
// }

// formatDate(function cb(data){

// })

// 4.Using Callback to Filter Array

// Write a function filterNames that takes an array of names and a callback to filter names that are longer than 5 characters.

// function filterNames(arr,callback){
//     setTimeout(() => {
//         let result = callback(arr);
//         console.log(result);
//     }, 1000);
// }


// filterNames(["sayank","Amit","ajay","ajay mahato","sanjay","souvik"],function cb(arr){
//     return arr.filter((f)=>f.length > 5);
// })


// Callback with Array Iteration

// Write a function processArray that takes an array of numbers and a callback, then applies the callback to each element.


// function processArray(arr,callback){
//     for (const item of arr) {
//         callback(item)
//     }
// }

// processArray([2,3,5,21,22,6,8],function(i){
//     console.log("Value is ::",i);
// })




// Simulate File Read with Callback

// Write a function readFile that simulates reading a file (using setTimeout) and calls a callback with the file content.


// function readFile(callback){
//     setTimeout(() => {
        
//     }, 1000);
// }

// readFile(function cb(){

// })


// Handle Async Data with Multiple Callbacks

// Write a function getDataAndTransform that simulates fetching data asynchronously and calls a callback to transform the data once fetched.


function getDataAndTransform(callback){

}