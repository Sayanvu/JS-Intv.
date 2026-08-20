console.log("A"); //1

async function main() {
  console.log("B"); //2

  await Promise.resolve().then(() => {
    console.log("C");//5
  });

  console.log("D"); //6
}

Promise.resolve().then(() => {
  console.log("E"); //4
});

main();
console.log("F"); //3