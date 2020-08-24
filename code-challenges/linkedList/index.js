'use strict'

const linkedList = require('./lib/linked-list');

const list = new linkedList();

list.insert(5);
list.includes(5);
list.insert('Moonbob');
list.insert('Rebel');
list.includes('Rebel');
list.toString();


console.log(list);