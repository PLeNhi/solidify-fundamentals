(function (){
    var users = ["Alice", "Bob", "Charlie"];

    function getUser(index: number): string {
        return users[index];
    }
    function addUser(name: string): void {
        users.push(name);
    }
    function removeUser(index: number): void {
        users.splice(index, 1);
    }
    function listUsers(): string[] {
        return users.slice();
    }
    function clearUsers(): void {
        users.length = 0;
    }
    function countUsers(): number {
        return users.length;
    }

    console.log(getUser(0)); // Output: Alice
    console.log(getUser(1)); // Output: Bob
    console.log(getUser(2)); // Output: Charlie

    console.log(countUsers()); // Output: 3
    addUser("David");
    console.log(countUsers()); // Output: 4
    console.log(listUsers()); // Output: ["Alice", "Bob", "Charlie", "David"]

    removeUser(1);
    console.log(listUsers()); // Output: ["Alice", "Charlie", "David"]

    clearUsers();
    console.log(countUsers()); // Output: 0
    // The users array and getUser function are not accessible outside of this IIFE
})()