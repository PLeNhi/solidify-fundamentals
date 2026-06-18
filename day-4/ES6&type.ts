//////Modern JS Features
type User = {
    name: string;
    age?: number;
    email?: string;
    address?: {
        city: string;
        country: string;
    };
};

function processUserData(user: User) {
    const { name, age = 18, email = "N/A", address } = user;
    
    const city = address?.city ?? "Unknown City";
    const country = address?.country ?? "Unknown Country";

    return {
        name,
        age,
        email,
        city,
        country
    };
}

// Example usage:
const user1: User = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    address: {
        city: "New York",
        country: "USA"
    }
};

console.log(processUserData(user1));

const user2: User = {
    name: "Bob"
};

console.log(processUserData(user2));


//////Array Methods + Reduce
type Order = {
    id: number;
    amount: number;
    status: "completed" | "pending" | "cancelled";
};

function calculateOrderStats(orders: Order[]) {
    const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
    const averageAmount = orders.length > 0 ? totalAmount / orders.length : 0;
    const completedOrders = orders.filter(order => order.status === "completed");

    return {
        totalAmount,
        averageAmount,
        completedOrders
    };
}

// Example usage:
const orders: Order[] = [
    { id: 1, amount: 100, status: "completed" },
    { id: 2, amount: 200, status: "pending" },
    { id: 3, amount: 150, status: "completed" },
    { id: 4, amount: 50, status: "cancelled" }
];

console.log(calculateOrderStats(orders));

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