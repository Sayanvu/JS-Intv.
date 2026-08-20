function getUserPosts(id, callback) {
    if (typeof id !== "number") {
        return callback(new Error("ID must be a number"), null);
    }
    setTimeout(() => {
        let posts = [
            { id: 1, title: "post1" },
            { id: 2, title: "post2" },
            { id: 3, title: "post3" },
            { id: 4, title: "post4" },
            { id: 5, title: "post5" },
        ];
        callback(null, posts);
    }, 1000);
}

getUserPosts(1, getPosts);
function getPosts(err, posts) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(posts);
        return;
    }
}
