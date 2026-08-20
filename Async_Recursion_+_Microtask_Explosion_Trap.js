console.log("Start");
debugger;
setTimeout(() => {
    console.log("Timeout");
}, 0);

async function loop() {
    console.log("Loop Start");
    // await Promise.resolve();
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log("Loop End");
    await loop();
}

loop();

console.log("After Loop");



// 1️⃣ First tell me:
// Does this program terminate or not?

//     ---- The Program will show an infinity loop and not terminate 

// Does it crash?
//     --- Yes
// Does "Timeout" ever print?
//     ---No.
// 2️⃣ Then explain step by step:
// What runs synchronously
//     -- start and after loop 


// What gets queued
//     ---- The promise will get queued.
// What happens after first await
//     ---- After first await loop start and loop end will print.


// Why this is dangerous
//     -- this will print an infinity loop that's why this is dengerous.  this will block the server memory and and block other background task so that this is dengerous

// 3️⃣ Tell me what kind of problem this is in real systems (keyword expected).
//     i dont know this.