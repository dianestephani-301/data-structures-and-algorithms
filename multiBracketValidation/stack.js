'use strict';

class Stack {

  constructor(){
    this.container = new Array();
  }

  push(item){
    this.container.push(item);
  }

  pop(){
    return this.container.pop()
  }
}

module.exports = Stack;