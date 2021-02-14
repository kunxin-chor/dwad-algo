const Node = require('./Node');
class LinkedList {
    head = null;
    add(newNode) {
        if (this.head==null) {
            this.head = newNode;            
        } else {
            // traverse to end
            let current = this.head;
            while (current.getNext() != null) {
                current = current.getNext();
            }
            // at this point current is at the last node
            current.setNext(newNode);
        }
    }
    find(data) {
        let current = this.head;
        let index = 0;
        while (current != null) {
            if (current.getData() == data) {
                return index;
            }
            current = current.getNext();
            index++;
        }
        return -1;
    }
    traverse(callback) {
        let current = this.head;
        while (current != null) {
            callback(current);
            current = current.getNext();
        }
    }

}

module.exports = LinkedList;