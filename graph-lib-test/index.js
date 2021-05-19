var Graph = require('data-structures').Graph;

Graph.prototype.getConnectedNodes = function (nodeId) {
    console.log("getConnectedNodes",nodeId);
    thisNode = this._nodes[nodeId];
    for (let destinationNodeId of Object.keys(thisNode._outEdges)) {
        console.log(destinationNodeId);
    }
    //foreach Object.keys(this._inEdges)
}

var graph = new Graph();

/*
var Person = function() {
    var preferences = [];
    var setPref = function(key, value) {
        return (preferences[key] = value);
    }
    var getPref = function(key) {
        return preferences[key];
    }
}
*/

class Person {
    constructor() {
        this.preferences = [];
    }
    setPref(key, value) {
        return (this.preferences[key] = value);
    }
    getPref(key) {
        return (this.preferences[key]);
    }
    show(stuffToShow) {
        console.log(stuffToShow);
    }
}

var interactingEntity = new Person();
interactingEntity.setPref('display','console');

graph.addNode('A');
graph.addNode('B');
graph.addEdge('A','B');

//get some arbitrary node from the graph
//graph.forEachNode(function(nodeObj) {
//    console.log(nodeObj);
//})

//show to interactingEntity
try {
    showStuff(interactingEntity, graph);
} catch (e) {
    console.log(e);
}

var i = 0;
setInterval(() => {
    console.log('iteration',i);
    i++;
}, 10000);

console.log('interval');

function showStuff(interactingEntity, graph) {
    if (interactingEntity instanceof Person) {
        if (interactingEntity.getPref('display') == 'console') {
            showStuffFormattedText(interactingEntity, graph);
        } else {
            //prepare html??
            throw(new Exception('not yet implemented: display to human other than console'));
        }
    } else {
        throw(new Exception('not yet implemented: interaction other than human'));
    }
}

function showStuffFormattedText(interactingEntity, graph) {
    //prepare ascii
    let formattedText = '';
    //graph.forEachNode(function (nodeObj) {
        //
    //});
    //get some node
    let startNodeId = 'A';
    let startNode = graph.getNode(startNodeId);
    //is startNode a Node()?
    //traverse graph
    console.log('all edges', graph.getAllEdgesOf(startNodeId));

    var visitedNodes = [];
    graph.forEachNode((nodeObj, nodeId) => {
        console.log(this);
        if (visitedNode)
        let e = graph.getAllEdgesOf(nodeId); //xxx should be this or parent or something
        console.log('foreachnode',e,nodeId,nodeObj);
        console.log('getConnected',nodeId,graph.getConnectedNodes(nodeId));
        visitedNodes[nodeId] = nodeObj;
    });

    interactingEntity.show(formattedText);
}

//need: a way to get from node-edge to connected node
//getConnectedNodes