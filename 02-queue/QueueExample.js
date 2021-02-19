const Queue = require('./Queue');

let newQ = new Queue();

// enqueue
console.log("Is the queue emtpy? ", newQ.isEmpty());

console.log("Enqueue 33");
newQ.enqueue(33);

console.log("Dequeuing...");
console.log(newQ.dequeue())

console.log("Enqueue 42, 45, 88, 120");
newQ.enqueue(42);
newQ.enqueue(45);
newQ.enqueue(88);
newQ.enqueue(120);

console.log("traversing");
while (newQ.isEmpty() == false) {
    let next = newQ.dequeue();
    console.log(next.getData());
}