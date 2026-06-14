// LEARN: Promises are a powerful way to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never. Promises can be in one of three states: pending, fulfilled, or rejected. You can use methods like `then`, `catch`, and `finally` to handle the resolved value or any errors that may occur.
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'First'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Second'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1500, 'Third'));

/// Using Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log('All promises resolved:', values);
}).catch((error) => {
    console.error('One or more promises rejected:', error);
});


/// Using Promise.race to get the first resolved promise
Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log('First promise resolved:', value);
}).catch((error) => {
    console.error('First promise rejected:', error);
});

/// Using Promise.allSettled to get the status of all promises
Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    console.log('All promises settled:', results);
});


console.log('==========================This will log before the promises resolve==========================');
var p = Promise.resolve( 42 );
 
p.then( () => { console.log('Promise resolved')} )
.finally( () => { console.log('Cleanup')} )
.then( () => { console.log('Next step')} )
.finally( () => { console.log('Final cleanup')} );