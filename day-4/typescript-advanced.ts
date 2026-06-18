
/////TypeScript Interfaces & Types

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

const card : Product & Order = {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "Electronics",
    amount: 1200,
    status: "completed"
}


////Generics
function identity<T>(arg: T): T {
    return arg;
}

const numberIdentity = identity<number>(42);
const stringIdentity = identity<string>("Hello, TypeScript!");

console.log(numberIdentity); // Output: 42
console.log(stringIdentity); // Output: Hello, TypeScript!


////Type Guards

function isUser (obj: any): obj is User {
    return (obj as User).name !== undefined;
}

function printUserInfo(obj: any) {
    if (isUser(obj)) {
        console.log(`User Name: ${obj.name}`);
        console.log(`User Age: ${obj.age ?? "N/A"}`);
        console.log(`User Email: ${obj.email ?? "N/A"}`);
    } else {
        console.log("Not a valid User object.");
    }
}

// Example usage:
const user3 = { name: "Charlie", age: 30 };
const notAUser = { title: "Not a User" };

printUserInfo(user3); // Valid User
printUserInfo(notAUser); // Not a valid User object.