setTimeout(() => {
    console.log('Timeout callback executed');
}, 0);

console.log('Synchronous code executed');

Promise.resolve().then(() => {
    console.log('Promise callback executed');
});

// Output will be:
// Synchronous code executed
// Promise callback executed
// Timeout callback executed
