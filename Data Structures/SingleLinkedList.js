// piece of data -val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let current = this.head;
    let newTail = current;
    if (!this.tail) {
      return undefined;
    }
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(val, index) {
    let foundNode = this.get(index);
    if (!foundNode) {
      return false;
    } else {
      foundNode.val = val;
      return true;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }
}

var list = new SinglyLinkedList();
list.push("hello");
list.push("Goodbye");
list.push("!");
list.push("hello");
list.push("Goodbye");
list.push("!");

console.log(list);
// var first = new Node("Hi")
// first.next = new Node("There")
// first.next.next = new ode("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = newNode;
//     this.tail = this.head;
//   }

//   append(val) {
//     if (!this.tail) {
//       this.head = new Node(val);
//       this.tail = this.head;
//     } else {
//       let oldTail = this.tail;
//       this.tail = new Node(val)
//       oldTail.next = this.tail
//       this.tail.previous = oldTail
//     }
//   }
// }
