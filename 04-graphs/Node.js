class Node {
    name = "";
    data = null;
    neighbours = [];

    constructor(data, name="") {
        this.name = name;
        this.data = data;
    }

    // neighbourNode must be an instance
    // of the Node class
    addNeighbour(neighbourNode, label="") {
        this.neighbours.push({
            "label": label,
            "node": neighbourNode
        });
    }

    getNeighbours() {
        return this.neighbours;
    }

    setData(newData){
        this.data = newData;
    }

    getData() {
        return this.data;
    }
}

module.exports = Node;