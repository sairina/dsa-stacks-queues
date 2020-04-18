/** Node: node for a stack. */

class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    // create newNode
    // if empty
      //set head and tail to newNode
    
    // set temp to this.first
    // set first to newNode
    //set newNode.next to temp

    let newNode = new Node(val);
    
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    }

    let temp = this.first;
    this.first = newNode;
    this.first.next = temp;
    this.size++;

    return;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {












    
    // if(!this.first) throw new Error('Error');

    // let removed = this.first;
    // this.first = this.first.next;

    // if (this.first == this.last) {
    //   this.last = null;
    // }

    // this.size--;
    // return removed.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
