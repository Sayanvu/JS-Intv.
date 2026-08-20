console.log("A"); //1

process.nextTick(() => console.log("B")); //3

Promise.resolve().then(() => {
    console.log("C"); //4
    process.nextTick(() => console.log("D")); //5
});

console.log("E"); //2
