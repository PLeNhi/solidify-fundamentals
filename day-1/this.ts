const person = {
    name: 'Alice',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

person.greet();
person.greet.call({ name: 'Bob', age: 25 });
person.greet.apply({ name: 'Charlie', age: 35 });

const boundGreet = person.greet.bind({ name: 'Dave', age: 40 });
boundGreet();