const Node = require('./Node');
const LinkedList = require('./LinkedList');

let n1 = new Node("node1", 101);
let n2 = new Node("node2", 102);
let n3 = new Node("node3", 103);

let linkedList = new LinkedList();
linkedList.add(n1);
linkedList.add(n2);
linkedList.add(n3);

linkedList.traverse((n)=>{
    console.log(n.getName(), n.getData());
})

console.log("102 is at index:", linkedList.find(102));

linkedList.deleteData(102);

linkedList.traverse((n)=>{
    console.log(n.getName(), n.getData());
})