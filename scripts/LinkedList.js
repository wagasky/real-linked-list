import Node from './Node';

export default class LinkedList {

  constructor () {
    this.length = 0;
    this.head = null;
  }

  unshift (item) {
    let currentNode = this.head;
    this.head = new Node(item);
    this.head.next = currentNode;
    this.length++;
  }

  shift () {
    let currentNode = this.head;
    if (!currentNode) {
      return null;
    } else {
    this.head = currentNode.next;
    this.length--;
    return currentNode;
    }
  }

  push(item) {
    let nodeToPush = new Node(item);
    let nodeToCheck = this.head;
    if(!nodeToCheck) {
      this.head = nodeToPush;
      this.length++;
      return nodeToPush;
    } else {
      while (nodeToCheck.next) {
        nodeToCheck = nodeToCheck.next;
      }
      nodeToCheck.next = nodeToPush;
      this.length++;
      return nodeToPush;
    }
  }

  pop() {
    let nodeToCheck = this.head;
    if (!this.length) {
      return this.head;
    } else if (this.length === 1) {
      let poppedNode = this.head
      this.head = null;
      this.length--;
      return poppedNode;
    } else if (this.length > 1) {
      while (nodeToCheck.next) {
        nodeToCheck = nodeToCheck.next;
      } 
      if (nodeToCheck.next === null) {
        let poppedNode = nodeToCheck
        this.length--
        nodeToCheck = null
        return poppedNode;
      }
    } 
  }

  find(item) {
    let nodeToCheck = this.head;
    if (!this.length) {
      return null;
    }
    while (nodeToCheck.data !== item) {
      if (nodeToCheck.next === null) {
        return null
      }
      nodeToCheck = nodeToCheck.next
    }
    return nodeToCheck;
  }

  // delete(item) {
  //   let nodeToCheck = this.head;
  //   if 

  // }
}
