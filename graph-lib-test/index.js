var Graph = require('data-structures').Graph;
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
}

var interactingEntity = new Person();
interactingEntity.setPref('display','console');

graph.addNode('A');
graph.addNode('B');
graph.addEdge('A','B');

//get some arbitrary node from the graph
graph.forEachNode(function(nodeObj) {
    console.log(nodeObj);
})

//show to interactingEntity
showStuff(interactingEntity, graph);



function showStuff(interactingEntity, graph) {
    if (interactingEntity.isPerson) {
        if (interactingEntity.getPref('display') == 'console') {
            showStuffFormattedText(interactingEntity, graph);
        } else {
            //prepare html??
        }
    }
}

function showStuffFormattedText(interactingEntity, graph) {
    //prepare ascii
    let formattedText = '';
    graph.forEachNode(function (nodeObj) {
        //
    });

    interactingEntity.show(formattedText);
}