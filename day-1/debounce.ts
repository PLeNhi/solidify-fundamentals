// Debounce function will delay the execution of the provided function until after a specified delay has passed since the last time it was invoked. This is useful for scenarios like handling user input events, where you want to limit the rate at which a function is called.
function debounce(func: Function, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function(this: any, ...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const debouncedFunction = debounce(function() {
    console.log('Debounced function executed!');
}, 1000);

debouncedFunction();
debouncedFunction();
debouncedFunction();