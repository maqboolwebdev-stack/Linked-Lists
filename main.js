import { LinkedList } from './linked-list.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.prepend('cow');


console.log(list.toString());

console.log(list.size());

console.log(list.headNode());

console.log(list.tail());

console.log(list.at(3));

console.log(list.pop());

console.log(list.contains('cow'));

console.log(list.contains('cat'));

console.log(list.findIndex('snake'));

list.insertAt(2, 'dolphin');

console.log(list.toString());

list.removeAt(2);
console.log(list.toString());
