////////////////////////PRACTICEING PROMISES////////////////////////////
const fetchUser1 = () => new Promise(resolve => setTimeout(() => resolve({ id: 1, name: "An" }), 500));

const fetchPosts1 = (userId: number) => new Promise(resolve => setTimeout(() => resolve(["Post 1", "Post 2"]), 1500));

const fetchComments1 = (postId: string) => new Promise(resolve => setTimeout(() => resolve(["Comment 1", "Comment 2"]), 2000));

fetchUser1()
    .then(user => {
        console.log("Promise chaining User:", user);
        fetchPosts1((user as { id: number }).id)
            .then(posts => {
                console.log("Promise chaining Posts:", posts);
                fetchComments1((posts as string[])[0])
                    .then(comments => {
                        console.log("Promise chaining Comment:", comments);
                    })
                    .catch(error => {
                        console.error("Error fetching comments:", error);
                    });
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    })

Promise.all([fetchUser1(), fetchPosts1(1)])
    .then(([user, posts]) => {
        console.log("Promise all User:", user);
        console.log("Promise all Posts:", posts);
        return fetchComments1((posts as string[])[0]);
    })
    .then(comments => {
        console.log("Promise all Comments:", comments);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });