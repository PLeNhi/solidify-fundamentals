class Queue {
    items:number[]
    constructor(){
        this.items = []
    }
    // Add an element to the back of the queue
    enqueue(item:number){
        this.items.push(item)
    }
     // Remove and return the front element from the queue
    dequeue(){
        if(!this.isEmpty) return "Stack is empty";
        this.items.shift()
    }

     // View the top element without removing it
    peek(){
        if(!this.isEmpty) return "Stack is empty";
        return this.items[this.items.length -1]
    }

    isEmpty()
    {
        return this.items.length === 0;
    }
}



////OptimizedQueue
class OptimizedQueue {
    items:number[]
    head:number
    constructor() {
        this.items = [];
        this.head = 0; // Tracks the front of the queue
    }

    enqueue(element:number) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
        return "Underflow";
        }
        const item = this.items[this.head];
        this.head++; // Shift the pointer instead of re-indexing the array
        
        // Optional: Memory cleanup for exceptionally long-running queues
        if (this.head > 1000) {
        this.items = this.items.slice(this.head);
        this.head = 0;
        }
        
        return item;
    }

    peek() {
        if (this.isEmpty()) {
        return "No elements in Queue";
        }
        return this.items[this.head];
    }

    isEmpty() {
        return this.items.length - this.head === 0;
    }

    size() {
        return this.items.length - this.head;
    }
}
