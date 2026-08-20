console.log("A"); //1

async function test() {
    console.log("B"); //2

    Promise.resolve().then(() => {
        console.log("C"); //5
    });

    await Promise.resolve();

    console.log("D"); //3
}

test();

Promise.resolve().then(() => {
    console.log("E"); //6
});

console.log("F"); //4

//  {
// Output will be 
// A B D F C E

// Test Pause when it got the await keyword , BUt in here it will see that the promise is resolved,
// C runs after D cause of microtask , When it find the await then console.log ("D") will run inside microtask, and Promise will run inside macrotask.
// E runs After D Cause of macrotask, E Belongs to macrotask and D belongs to microtask,
// D will be asynchronous task here , C And E will be part of microtask and else everything will be synchronous,
// I have learned the golden rule that promise has less priority then await/async and call stack always has the high priority
//  }




// Counter Question 1:
// After this line runs:
// await Promise.resolve();

// Does "D":

// A) Run immediately
// B) Go to call stack
// C) Go to microtask queue
// D) Go to macrotask queue

// Yes , will run immedietly , cause it will go to macrotask queue

// -> Correct answer  :   Await Always go to microtask queue , Ans: microtask queue,  And it runs after current call stack excecution

// 🔴 Counter Question 2
// Inside test() we have:
// Promise.resolve().then(() => {
//     console.log("C");
// });

// This .then() callback is placed in:

// A) Call stack
// B) Microtask queue
// C) Macrotask queue

// Microtask Queue (correct)

// Is it queued before or after the await continuation?
// -> It will queued after the await continuation

// Correct answer that promise will be run inside microtask and the console will run in microtask queue, 

// So the order became C , D 


// 🔴 Counter Question 3 (Very Important)

// Promise.resolve().then(() => console.log("C"));
// await Promise.resolve();

// Which one gets queued first?
// "C"
// "D"

// I belive "D" will run first cause, cause await have more priority than promise (wrong),

// both are belongs to the microtask both is having the same priority And Microtask are runed as FIFO like FIRST IN FIRST OUT.



//  Now Let's rebuild the excecution, 

// console.log("A");

// async function test() {
//     console.log("B");

//     Promise.resolve().then(() => {
//         console.log("C");
//     });

//     await Promise.resolve();

//     console.log("D");
// }

// test();

// Promise.resolve().then(() => {
//     console.log("E");
// });

// console.log("F");


// // Step 1 -
// // Synchronous Phase
// console.log("A");   // ----> will print "A" immedietly.
// 2. test() called
// --->   Inside test console.log("B"); //---->> runs immedietly.

// --->> Then .then() came >> part of microtask queue (sends the task to microtask queue) >> await is also the part of microtask queue so the excecution pause,

// ---->> then came Next Promise .then () (console.log("E"))  This is also part of microtask queue so send it to the microtask queue,

// Then last (console.log("F")) cames in that runs immedietly...

// so, the output will be 
// A
// B
// F
// C
// D
// E





