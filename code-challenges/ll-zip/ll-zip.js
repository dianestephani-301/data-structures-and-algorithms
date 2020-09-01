'use strict';

//Whiteboard with Davee, Chris, Ryan, and Joe. Code with Joe and Ryan.

// const list = require('../linkedList');
const util = require('util');
const LinkedList = require('../linkedList/lib/linked-list');

let list1 = new LinkedList();
let list2 = new LinkedList();

list1.append(2);
list1.append(4);
list1.append(6);

list2.append(3);
list2.append(5);
list2.append(7);


function zipper(list1, list2){
  let current = list1.head;
  let temp = current.next;
  let current2 = list2.head;
  let temp2;

  while(current.next){
    temp2 = current2.next;
    current.next = current2;
    current2 = temp2;
    current = current.next;
    current.next = temp;
    current = current.next;
    temp = current.next;
  }

  current.next = current2;
  current = current.next;
  current.next = temp;
  return list1;
}

zipper(list1, list2);


console.log(util.inspect(list1, {showHidden:false, depth: null}));
// console.log(util.inspect(list2, {showHidden:false, depth: null})