const Node = require('./Node');

const n1 = new Node(101);
const n2 = new Node(102);
const n3 = new Node(103);
const n4 = new Node(104);
const n5 = new Node(105);

n1.addNeighbour(n2);
n2.addNeighbour(n1);

n2.addNeighbour(n3);
n2.addNeighbour(n4);

n1.addNeighbour(n3);
n1.addNeighbour(n5);

console.dir(n1);
console.log(n1.neighbours[0]);