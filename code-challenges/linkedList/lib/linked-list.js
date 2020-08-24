'use strict'

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(addValue){
    const node = new Node(addValue);
    node.next = this.head;
    this.head = node;

    return this.head;
  }

  includes(searchValue){
    let current = this.head;
    while(current !== null) {
      if (current.value == searchValue){
        console.log(true);
        return true;
      }
      console.log(current);
      current = current.next;
    }
    console.log(false);
    return false;
  }
  toString(){
    let current = this.head;
    let string = '';
    while(current){
      if (current !== null){
        string = string + '{' + current.value + '}';
        // string = `${string} + ${current.value} +`;
        current = current.next;
      }
      if (current == null){
        string = string + 'NULL';
      }
    }
    console.log(string);
  }
}

module.exports = LinkedList;