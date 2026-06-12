interface AnimalProperties {
    name: string;
    food: string;
}

interface AnimalPrototype {
    eat(): void;
}

interface Animal extends AnimalProperties, AnimalPrototype {}

function Animal(this: Animal, name: string, food: string): void {
    this.name = name;
    this.food = food;
}

Animal.prototype.eat = function(this: Animal): void {
        console.log(`${this.name} is eating ${this.food}.`);
}

var dog = new (Animal as any)('Dog', 'bone');
var cat = new (Animal as any)('Cat', 'fish');

dog.eat();
cat.eat();

console.log(dog.__proto__ === Animal.prototype); // true
console.log(cat.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.constructor === Animal); // true