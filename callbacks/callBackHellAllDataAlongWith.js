function getUser(id, callback) {
    callback(null, { id: 1, name: 'sayan' })
}
function getPosts(id, callback) {
    callback(null, { id: 1, postTittle: 'post tittle' })
}
function getComments(id, callback) {
    callback(null, { id: 1, comment: "Hello", id: 2, comment: "Hii" })
}
function callBackAllTogether(id) {
    getUser(id, (err, user) => {
        if (err) return console.log(err);
        console.log(user);
        getPosts(user.id, (error, post) => {
            if (error) return console.log(error);
            console.log(post);
            getComments(post.id, (error, comments) => {
                if (error) return console.log(error);
                console.log("Final Comments:", comments);
            })
        })
    })
}

callBackAllTogether(1)