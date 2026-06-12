// Throttle will limit the number of times a function can be called within a specified time frame. It ensures that the function is not called more often than the defined delay.

function throttle (func: Function, delay: number) {
    let lastCall = 0;

    return function(this: any, ...args: any[]) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

const throttledFunction = throttle(function() {
    console.log('Throttled function executed!');
}, 1000);

throttledFunction();
throttledFunction();
throttledFunction();