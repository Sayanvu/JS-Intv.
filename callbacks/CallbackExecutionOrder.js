function fetchUser(id, callback) {
  if (typeof id !== "number") {
    return callback(new Error("ID must be a number"));
  }

  setTimeout(() => {
    callback(null, { id, name: "User" + id });
  }, 300);
}
console.log("1"); //1

setTimeout(() => {
  console.log("2"); //4
}, 0);

fetchUser(3, () => {
  console.log("3"); //3
});

console.log("4"); //2 



// Output
// 1 4 3 2
// First it will print the asynchronous codes and then it will reads the callback phase in the event loop queue and then it will check the callback pahase after the callback phase is relased then it will print the timer phase,  
//