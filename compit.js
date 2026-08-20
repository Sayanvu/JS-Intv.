// const x = 10;
// (function(){
//     console.log(x);
//     var x = 20;
// })();


// var a = 5;

// function demo() {
//     a = 20;
//     console.log(a);
//     var a;
// }

// demo();

// console.log(a);

// hello();

// var hello = function () {
//     console.log("Hello");
// };

// let a = 5;

// function demo() {
//     console.log(a);
//     let a = 10;
// }

// demo();

// var a = 5;

// function demo() {
//     console.log(a);

//     if (true) {
//         var a = 10;
//     }

//     console.log(a);
// }

// demo();

// var a = 1;

// function demo() {
//     console.log(a);

//     var a = 2;

//     function inner() {
//         console.log(a);
//     }

//     inner();
// }

// demo();

// ************************************************************

// var a = 1;
// function first() {
//     console.log(a);//undefined
//     if (true) {
//         var a = 2;
//     }
//     function second() {
//         console.log(a);//error a is not defined
//         let a = 3;
//         console.log(a); //3
//     }
//     second();
//     console.log(a);//2
// }

// first();

// ************************************************************

// var a = 1;

// function first() {
//     console.log(a);// undefined
//     if (true) {
//         var a = 2;
//     }
//     function second() {
//         console.log(a);// 'RefrenceError: Cannot access 'a' before initialization'
//         let a = 3;
//         console.log(a); //3
//     }
//     second();
//     console.log(a);//2
// }
// first();


// *******************************************************************
// var a = 10;

// function demo() {
//     if (true) {
//         var a = 20;
//     }
//     console.log(a); //20
// }
// demo();

// console.log(a); //10


// function demo() {
//     console.log(a);
//     {
//         let a = 20;
//     }
//     console.log(a);
// }

// demo();


function dummy() {
    
}