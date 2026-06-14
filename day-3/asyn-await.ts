/// LEARN: Async/await is a syntactic sugar built on top of Promises that allows you to write asynchronous code in a more synchronous and readable manner. The `async` keyword is used to declare an asynchronous function, which returns a Promise. The `await` keyword can be used inside an async function to pause the execution until the Promise is resolved or rejected, making it easier to work with asynchronous operations without needing to chain `.then()` calls.


const fetchUser = () => new Promise(resolve => setTimeout(() => resolve({ id: 1, name: "An" }), 1000));
const fetchPosts = (userId: number) => new Promise(resolve => setTimeout(() => resolve(["Post 1", "Post 2"]), 1000));

// CÁCH 1: Dùng Promise Chaining truyền thống
function getNewsWithPromise() {
    fetchUser()
        .then((user: unknown) => fetchPosts((user as { id: number }).id))
        .then((posts: unknown) => console.log("Promise Posts:", posts));
}

// CÁCH 2: Dùng Async/Await (Mã nguồn đọc tuần tự từ trên xuống dưới)
async function getNewsWithAsyncAwait() {
    const user = await fetchUser();       // Dừng lại 1s chờ lấy user
    const posts = await fetchPosts((user as { id: number }).id); // Dừng lại tiếp 1s chờ lấy posts
    console.log("Async/Await Posts:", posts);
}

getNewsWithAsyncAwait();
