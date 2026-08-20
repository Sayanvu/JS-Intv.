console.log("Start"); //1

setTimeout(() => {
    console.log("Timeout"); //6
}, 0);

setImmediate(() => {
    console.log("Immediate"); //5
});

process.nextTick(() => {
    console.log("NextTick"); //3
});

Promise.resolve().then(() => {
    console.log("Promise"); //4
});

console.log("End"); //2



// fs...
readFile("file.txt", () => {
    setTimeout(() => {
        console.log("File Read  settimeout");//3
    }, 0);
    setImmediate(() => {
        console.log("File Read Immediate");//2
    });   
    console.log("File Read"); //1
});




// 🎯 You Must Explain:

// 1️⃣ Exact output order

// start
// end
// nextTick
// promise
// immediate
// timeout


// 2️⃣ Which runs first: nextTick or Promise.then() — and WHY

// nextTick will run before promise because nextTick is part of microtask queue which designed to run immedietly after currernt process end and before the promise.then() which is also part of microtask queue but it will run after nextTick and before the next event loop tick.


// 3️⃣ Where setImmediate runs relative to setTimeout(0) — and WHY

// setImmediate will run before the setTimeout because setImmediate is designed to run after the current event loop phase ends, 


// 4️⃣ Full event loop phase reasoning (Node.js phases)
//  In this code  first teh synchronous code will run like start and end and then the microtask will run which includes the promise and nextTick and nexttick is designed to run before promise .then () so it prints nextTick first and then it prints promise accoding to the order of microtask queue and then the setImmediate will run cause that is designed to run after the current event loop phase ends and then settimeout.

