console.log("Start"); //1
debugger
setTimeout(() => {
    console.log("Timeout 1"); //10
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1"); //4  next ->
});

async function boss(n) {
    debugger;
    if (n === 0) return;  // step 10 exit from function .

    console.log("Boss", n); //2 -> 2  // 7 -> 1

    await Promise.resolve();

    console.log("After Await", n); //5=>2 //  8 -> 1

    Promise.resolve().then(() => {
        console.log("Inner Promise", n); //6  //9 -> 1
    });

    await boss(n - 1); 
}

boss(2);

setTimeout(() => {
    console.log("Timeout 2"); //11
}, 0);

console.log("End"); //3


// OUTPUT:
// start  ...
// Boss 2 ...
// end ...
// Promise 1 ...
// After Await 2 ...
// Inner Promise 1

// Boss 1
// After Await  1
// Inner Promise
// Timeout 1
// Timeout 2


// When each await pauses
// Await pauses when inside the function it got await promise ,
// After await is queued after the promise 1 inside macrotask queue,
// Inner Promise will Queued when after await print or after await successfully excecuted.
// Timeout 1 and timeout 2 are part of web api so they excecuted after the call stack and macrotask done excecuting.
// recursion will not cause starvation they will stop excecuting when the condition matched