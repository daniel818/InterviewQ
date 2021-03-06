// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let size = 0;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return null;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;

    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();

    lastNode ? (lastNode.next = new Node(data)) : (this.head = new Node(data));
  }

  getAt(index) {
    if (!this.head) return null;

    let count = 0;
    let node = this.head;

    while (node) {
      if (count === index) return node;

      count++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) return null;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
    prev.next = this.getAt(index + 1);
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let prevNode = this.getAt(index-1)
    let currNode = this.getAt(index);
    if (!currNode) {
      this.insertLast(data);
    } else {
        prevNode.next = new Node(data,currNode)
    }
  }
}
module.exports = { Node, LinkedList };
