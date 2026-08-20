console.log("1");

async function outer() {
    console.log("2");

    await inner();

    console.log("3");
}

async function inner() {
    console.log("4");

    setTimeout(() => {
        console.log("5");
    }, 0);

    await Promise.resolve();

    console.log("6");
}

outer();

Promise.resolve().then(() => {
    console.log("7");
});

console.log("8");


// Output ::  1 2 4 8 6 7 3

// 1 and 8 will run synchronously ,
// outer will pause when it see the settimeout function,  
// inner will pause when outer is running,cause inner is called from outer

//  Order ::

//console.log("1"); // callstack,
// outer() loads to the memory and print console.log("2"); this console,
// It calls inner() function and immedietly print console.log("4"),
//setTimeout will goes to webapi and the excecution pauses and ,
// inside the call stack console.log("8") and that will be immedietly print,
// and then print microtask queue means print 6 cause it was first the print 7 and then release webapi data means 5, and then print 3 cause due to await inner it saves inside the microtask queue



// 🔴 Counter Question 1 (Very Important)

// await Promise.resolve();
// console.log("6");
// ------------------------------------------------------------------------
// When await is encountered:
// Does inner() pause?
// Does outer() pause?
// Does the call stack become empty?
// Where is "6" queued?
// Answer these precisely.

// await encountered when the function start excecuting it will not pause cause this is resolved promise this will not pause the excecution stack.
// yes, the outer will pause cause it called the await inner function and as the function is await so until unless the inner function's microtask queue are not clear then the outer will be pasue.

// Yes The call stack become empty.
// 6 will be queue inside the microtask queue


// 🔴 Counter Question 2
// "i said" --- "outer will pause when it see the setTimeout function" 
// Yes settimeout will not pause outer function cause that is not having await also when it get the promise that will pause.

// 🔴 Counter Question 3
// Let’s isolate just this:

// await inner();
// console.log("3");

// 3 will get queued after 6,
// cause the inner function call is await so until unless the inner function microtask queue is not releases then 3 will not print it is FIFO cause  6 enteres inside the microtask queue first so it will release first



// 🔴 Counter Question 4 (Macrotask Check)
// setTimeout(() => console.log("5"), 0);
// When does "5" run relative to:
// "6"
// "7"
// "3"
// And why?

// 5 should run relative to 3 casue settImeout is part of web api and that is less priority compare to await so until unless microtask queue is not releases the webapi part willnot released.