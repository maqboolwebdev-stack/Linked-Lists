import { Node } from './node.js';

export class LinkedList {
  constructor() {
    this.head = null; // In starting list is empty
  }

  // 1. append(value): joint the node in the last
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  // 2. prepend(value): joint the node in the start
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  // 3. size(): Tells the total count of the node
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  // 4. head(): Return the first node value
  headNode() {
    return this.head ? this.head.value : undefined;
  }

  // 5. tail(): Return the last node value
  tail() {
    if (!this.head) return undefined;
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current.value;
  }

  // 6. at(index): Return the value based on the given index
  at(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) return current.value;
      count++;
      current = current.nextNode;
    }
    return undefined;
  }

  // 7. pop(): Remove the head node and return its value
  pop() {
    if (!this.head) return undefined;
    const value = this.head.value;
    this.head = this.head.nextNode;
    return value;
  }

  // 8. contains(value): Checks's the value exist or not
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  // 9. findIndex(value): Return the value index
  findIndex(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      index++;
      current = current.nextNode;
    }
    return -1;
  }

  // 10. toString(): Return the whole list in string format
  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    result += 'null';
    return result;
  }

  // 11. insertAt(index, value): Add the new node based on given new index
  insertAt(index, value) {
    if (index < 0 || index > this.size()) {
      throw new RangeError('Index out of bounds');
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.nextNode;
      count++;
    }
    const newNode = new Node(value, current);
    previous.nextNode = newNode;
  }

  // 12. removeAt(index): Remove the node based no the given index
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError('Index out of bounds');
    }
    if (index === 0) {
      return this.pop();
    }
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.nextNode;
      count++;
    }
    previous.nextNode = current.nextNode;
    return current.value;
  }
}
