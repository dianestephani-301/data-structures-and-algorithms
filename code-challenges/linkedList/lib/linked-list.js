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
        // string = string + '{' + current.value + '}';
        string = `${string} { ${current.value} } -> `;
        current = current.next;
      }
      if (current == null){
        string = string + 'NULL';
      }
    }
    console.log(string);
  }
  //Via Brian's class example
  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }
  
      current.next = node;
    }

    return this;
  }

  insertBefore(value, newVal){
    let current = this.head;
    let previous;


    while(current.next){
      if (current.value === value){
        let node = new Node(newVal);
        node.next = current;
        previous.next = node;

        console.log('previous', previous);
        return this;
      }
      previous = current;
      current = current.next;
    }
  }

  insertAfter(value, newVal){
    let current = this.head;
    while(current.next){
      if(current.value === value){
        let node = new Node(newVal);
        let nextNode = current.next;
        current.next = node;
        node.next = nextNode;
        return this;
      }
      current = current.next;
    }
  }
}

module.exports = LinkedList;