let user;

function fetchUser(id, callback) {
  if (typeof id !== "number") {
    return callback(new Error("ID must be a number"));
  }

  setTimeout(() => {
    callback(null, { id, name: "User" + id });
  }, 1000);
}


fetchUser(1, (err, u) => {
  user = u;
});

fetchUser(2, (err, u) => {
  user = u; //2, name : "User" 2
});

setTimeout(() => {
  console.log(user); //2, name : "User" 2
}, 1000);


// This is happen because first it loads the fetch user with id 1 and user will assigned to it's value and then second fetch with the id of 2 as the user is universally declared so it will replace the user parameters previously saved value... so that's how this is gone