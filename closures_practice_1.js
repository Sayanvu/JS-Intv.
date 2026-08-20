// let x = 10;
// function outer() {
//     let x = 20;
//     function inner() {
//         console.log(x); // 20
//     }
//     return inner;
// }
// const fn = outer();

// x = 30;
// fn();
 

//---------------------------------------------------------


// let x = 10;
// function outer() {
//     let x = 20;
//     return function () {
//         console.log(x);
//         function inner() {
//             console.log(x);
//         }
//         inner();
//     };
// }

// const fn = outer();
// x = 30;
// fn();

//---------------------------------------------------------

// let x = "global";
// function first() {
//     let x = "first";
//     function second() {
//         console.log(x); //first
//     }
//     return second;
// }

// function third() {
//     let x = "third";
//     const fn = first();
//     fn();
// }

// third();

//------------------------------------------------------------

// function outer() {
//     let count = 0;

//     return function inner() {
//         count++;
//         return count;
//     };
// }

// const a = outer();
// const b = outer();

// console.log(a()); //1
// console.log(a()); //2
// console.log(b()); //1
// console.log(a()); //3
// console.log(b()); //2


//--------------------------------------------------------


// function createCounter() {
//     let count = 0;
//     function increment() {
//         count++;
//         return count;
//     }

//     function decrement() {
//         count--;
//         return count;
//     }

//     return {
//         increment,
//         decrement
//     };
// }

// const counter1 = createCounter();
// console.log(counter1.increment()); //1
// console.log(counter1.increment()); //2
// const inc = counter1.increment; //-->3
// const dec = counter1.decrement; // -->2
// console.log(inc());//3
// console.log(dec()); //2
// console.log(counter1.increment()); //3


//--------------------------------------------------------

// let value = 10;
// function outer() {
//     let value = 20;
//     function first() {
//         let value = 30;
//         return function second() {
//             value++;
//             console.log(value); //31
//         };
//     }
//     return first; //31
// }

// const fn = outer();
// const a = fn();
// const b = fn();

// a();  //31
// b(); //31
// a(); //32

//-------------------------------------------------------------

// let x = 1;
// function outer() {
//     let x = 2;
//     return function middle() {
//         let x = 3;
//         return function inner() {
//             console.log(x);
//             x++; //4
//         };
//     };
// }

// const a = outer();
// const b = a();
// const c = a();

// b();//4
// b();//5
// c();//4


//-------------------------------------------------------------

// function outer() {
//     let x = 10;
//     function first() {
//         x++;
//         return function second() {
//             return x;
//         };
//     }
//     return first;
// }

// const a = outer();//-> first

// const b = a(); // -> 10+1 => 11 -> second
// console.log(b(),"Previous : ");
// const c = a(); // -> 11+1 => 12 -> second

// console.log(b()); 
// console.log(c()); 



//--------------------------------------------------------------

// let x = 100;
// function outer() {
//     let x = 10;
//     return function first() {
//         let x = 1;
//         return function second() {
//             x++;
//             return function third() {
//                 console.log(x);
//             };
//         };
//     };
// }

// const a = outer();  // return first
// const b = a();  // return second x = 1
// const c = a();  // return second x = 1
// const d = b();  // return third x = 2
// const e = c();  // return third x = 2
// d(); 
// e(); 


//-------------------------------------------------------------

// function outer() {
//     let x = 0;
//     return function first() {
//         ++x; 
//         return function second() {
//             ++x;
//             return function third() {
//                 ++x;
//                 console.log(x);
//             };
//         };
//     };
// }

// const a = outer();
// const b = a();
// const c = a();

// const d = b();
// const e = c();

// d();
// e();



// -------------------------------------------------------------

// function outer() {
//     let x = 0;
//     return function first() {
//         x++;
//         // console.log(x,"------********");
//         return function second() {
//             x += 2;
//             return function third() {
//                 x += 3;
//                 return x;
//             };
//         };
//     };
// }

// const a = outer(); // first x = 0
// const b = outer(); // first x = 0

// const a1 = a();  //second x = 1
// const a2 = a();  //second x = 2

// const b1 = b(); //second x = 1

// const a3 = a1(); //third x = 4
// const b2 = b1(); //third x = 3

// console.log(a3()); //7
// console.log(a2()); // return function third
// console.log(b2()); //6


// ------------------------------------------------------------
// function outer() {
//     let x = 0;
//     return function first() {
//         x++;
//         return function second() {
//             x += 10;
//             return function third() {
//                 x += 100;
//                 return x;
//             };
//         };
//     };
// }

// const a = outer();

// const f1 = a(); //f1 ->second f1() -> third x = 1
// const f2 = a(); //f2 ->first f2() -> second x = 2

// const s1 = f1(); // s1 -> second s1() -> third x = 12
// const s2 = f2(); // s2 -> second s2() -> third x = 22

// console.log(s1()); // s1()-> third x = 122
// console.log(s2()); // s2() -> third x = 222
// console.log(f1()); // function -> third 
// console.log(f2()); // function -> third


