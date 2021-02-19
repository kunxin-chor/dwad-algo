const Stack = require('./Stack');

let newS = new Stack();
console.log("Pushing 33");
newS.push(33);
console.log("Pop ==>", newS.pop().getData())
console.log("Pushing 42, 46, 48, 60");
newS.push(42);
newS.push(46);
newS.push(48);
newS.push(60);
while (newS.isEmpty() == false) {
    console.log(newS.pop().getData());
}