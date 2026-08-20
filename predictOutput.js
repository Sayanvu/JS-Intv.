// for (var index = 0; index < 3; index++) {
//     setTimeout(function(){
//         console.log(index);
//     },0);
// }


// for (var index = 0; index < 5; index++) {
//     (function(i){
//         setTimeout(function(){
//             console.log(i);
//         })
//     })(index)    
// }


// for (var index = 0; index < 5; index++) {
//     setTimeout(function(i) {
//         console.log(i);
//     }, 0,index);    
// }


// const obj = {
//     name: "Sayan",
//     greet: function () {
//         console.log(this.name); ///sayan

//         setTimeout(function () {
//             console.log(this.name); // undefined
//         }, 1000);

//         setTimeout(() => {
//             console.log(this.name); //sayan
//         }, 2000);
//     }
// };

// obj.greet();



// const user = {
//     name: "Sayan"
// };
// const user2 = {
//     name: "Samrat"
// };

// function greet(age, city) {
//     console.log(this.name, age, city);
// }

// greet.call(user, 26, "Kolkata");
// greet.apply(user, [26, "Kolkata"]);

// // const boundGreet = greet.bind(user, 26);
// // boundGreet("Kolkata");
// // boundGreet("chennai");

// const fn = greet.bind(user);
// fn.call({ name: "Rahul" }, 30, "Delhi");
// fn.call({ name: "Samrat" }, 30, "Delhi");

// const _fn = greet.bind(user2);
// _fn.call({ name: "Rahul" }, 30, "Delhi");





// console.log("start");

// setTimeout(() => {
//     console.log("timeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("promise 1");
// });

// Promise.resolve().then(() => {
//     console.log("promise 2");
// });

// console.log("end");




// async function foo() {
//     await Promise.resolve().then(()=>{
//         console.log("Promise 4....");
//     })
//     await bar();
//     console.log("foo start");
//     console.log("foo end");
// }

// async function bar() {
//     await Promise.resolve().then(() => {
//         console.log("promise 2");
//     })
// }

// console.log("script start");

// foo();

// Promise.resolve().then(() => {
//     console.log("promise");
// });

// console.log("script end");


// async function hello(){
//     console.log("Hello inside");
//     await Promise.resolve().then(() => {
//         console.log("promise 1");
//     })    
// }

// console.log("start:");
// hello();
// console.log("end:");





// async function test() {
//     try {
//         console.log("A");

//         Promise.reject("Error 1").catch(() => {
//             console.log("Promise 2=>error");
//         });

//         await Promise.reject("Error 2");

//         console.log("B");
//     } catch (err) {
//         console.log("C", err);
//     }
// }

// test();

// console.log("D");



// async function demo() {
//     try {
//         Promise.reject("X");
//         await Promise.resolve();
//     } catch (e) {
//         console.log("caught");
//     }
// }
// demo();



console.log("1. Global start");

function normalFunction() {
  console.log("2. normalFunction start");

  setTimeout(() => {
    console.log("8. setTimeout callback (macrotask)");
  }, 0);

  Promise.resolve().then(() => {
    console.log("6. Promise.then inside normalFunction (microtask)");
  });

  console.log("3. normalFunction end");
}

async function asyncFunction() {
  console.log("4. asyncFunction start");

  await Promise.resolve().then(() => {
    console.log("5. Promise.then before await resolves (microtask)");
  });

  console.log("7. asyncFunction after await");
}

normalFunction();
asyncFunction();

Promise.resolve().then(() => {
  console.log("9. Global Promise.then (microtask)");
});

setTimeout(() => {
  console.log("10. Global setTimeout (macrotask)");
}, 0);

console.log("11. Global end");
