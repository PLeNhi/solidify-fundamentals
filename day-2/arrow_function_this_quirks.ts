// wwrite Arrow Function this quirks
class Counter {
    count: number = 0;

    // Using a regular function, 'this' will refer to the Counter instance
    incrementRegular() {
        setTimeout(function(this: any) {
            this.count++;
            console.log('Regular Function Count:', this.count); // 'this' is undefined here
        }, 1000);
    }

    // Using an arrow function, 'this' will refer to the Counter instance
    incrementArrow() {
        setTimeout(() => {
            this.count++;
            console.log('Arrow Function Count:', this.count); // 'this' refers to the Counter instance
        }, 1000);
    }
}

const counter = new Counter();
counter.incrementRegular(); // Will log 'Regular Function Count: NaN' due to 'this' being undefined
counter.incrementArrow();   // Will log 'Arrow Function Count: 1' as expected
