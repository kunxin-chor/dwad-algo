const Node = require('./Node');

let n1 = new Node("node1", 1);
console.log(n1.getData());

let n2 = new Node("node2", 2);
n1.setNext(n2);
console.log(n1.getNext());