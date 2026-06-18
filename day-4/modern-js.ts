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
