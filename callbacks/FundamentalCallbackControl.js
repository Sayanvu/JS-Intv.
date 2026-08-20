// In Node.js style (error-first callback), write a function:
// Requirements:
// If id is a number → after 300ms return:
// { id, name: "User" + id }

// If id is NOT a number → return an error
// Usage should work like:

function fetchUser(id, callback) {
  if (typeof id !== "number") {
    return callback(new Error("ID must be a number"));
  }

  setTimeout(() => {
    const user = { id, name: "User" + id };
    callback(null, user);
  }, 300);
}

fetchUser("3", callBackFunction);

function callBackFunction (err,value){
    if(err){
        console.log(err);
    }
    else{
        console.log(value,"Value is this");
    }
}