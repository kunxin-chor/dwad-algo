class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(id, node) {
        this.nodes[id] = node;
    }

    // startNodeID - id of the node where
    // the edge orignates from
    // endNodeID - id of the node where the edge
    // will end at
    addEdge(startNodeID, endNodeID) {
        const startNode = this.nodes[startNodeID];
        const endNode = this.nodes[endNodeID];



        if (startNode && endNode) {

            if (startNode.getNeighbours().map(n=>n.node).includes(endNode)) {
                return;
            }

            if (endNode.getNeighbours().map(n=>n.nodes).includes(startNode)) {
                return;
            }

            startNode.addNeighbour(endNode);
            endNode.addNeighbour(startNode);
        }
    }
}

module.exports = Graph;