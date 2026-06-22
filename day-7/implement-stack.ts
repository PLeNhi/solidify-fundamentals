class Stack {
    items:number[]
    constructor(){
        this.items = []
    }

    push(item:number){
        this.items.push(item)
    }

    pop(){
        this.items.pop()
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

    size(){
        return this.items.length;
    }
}

const newStack = new Stack()
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);

console.log("Size of stack",newStack.size())
console.log("Get peek: ",newStack.peek())
// newStack.pop(0)

console.log(newStack.items)
