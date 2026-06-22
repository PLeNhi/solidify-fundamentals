export class ListNode {
  val: number;
  next: ListNode | null = null;
  constructor(val: number) { this.val = val; }
}

export const headExpamle = new ListNode(1);
headExpamle.next = new ListNode(2);
headExpamle.next.next = new ListNode(3);
headExpamle.next.next.next = new ListNode(4);
headExpamle.next.next.next.next = new ListNode(5);

var reverseList = function(head: ListNode) {
    let current :ListNode | null = head
    let prev: ListNode | null = null
    
    while (current !== null) {
        let nextNode: ListNode | null = current.next;
        current.next = prev; 
        prev = current;
        current = nextNode; 
    }
    return prev;
};
console.log(reverseList(headExpamle))