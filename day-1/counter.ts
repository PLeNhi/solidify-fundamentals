function createCounter() {
    let count = 0;
    const counter = function() {
         count++;
         return count;
    }
    return counter;
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

console.log("==============Advanced Counter==================");

function createCounterAdvanced() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => {
            count = 0;
        },
        getValue: () => count
    };
}

const counter3 = createCounterAdvanced();
console.log(counter3.getValue()); // 0
console.log(counter3.increment()); // 1
console.log(counter3.increment()); // 2
console.log(counter3.decrement()); // 1
counter3.reset();
console.log(counter3.getValue()); // 0

console.log("==============Private Counter with IIFE (Immediately Invoked Function Expression)==================");

const counterModule = (function() {
    let count = 0;
    
    function increment() {
        return ++count;
    }
    function getCount() {
        return count;
    }

    return { increment, getCount };
})();

console.log(counterModule.getCount()); // 0
console.log(counterModule.increment()); // 1
console.log(counterModule.increment()); // 2
console.log(counterModule.getCount()); // 2