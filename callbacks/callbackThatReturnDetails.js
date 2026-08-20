    function fetchUser(id, callback) {
    if (typeof id !== "number") {
        return callback(new Error("ID must be a number"),null);
    }

    setTimeout(() => {
        let user = { id, name: "User" + id };
        callback(null, user);
    }, 2000);
}
fetchUser("p",details)
function details(err,user)   {
    if(err){
        console.log(err);
        return;;
    }
    else{
        console.log(user);
        return;
    }
}