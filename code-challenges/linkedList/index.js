'use strict'

const linkedList = require('./lib/linked-list');

const list = new linkedList();

list.insert(5);
list.includes(5);
list.insert('Moonbob');
list.insert('Rebel');
list.includes('Rebel');
list.toString();

//Via Davee
list.insert('first');
list.insert('second');
list.insert('third');
list.insert('4th');
list.insert('fifth');
list.append('last');
list.insertAfter('4th', '4.5');

list.toString();
console.log('list at beginning: ', list);

list.insertBefore('second', 'insertThis');

console.log('After insert:', list);