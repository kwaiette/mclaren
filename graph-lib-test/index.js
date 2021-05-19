var Graph = require('data-structures').Graph;
var graph = new Graph();

var Person = function() {
    var preferences = [];
    var setPref = function(key, value) {
        return (preferences[key] = value);
    }
    var getPref = function(key) {
        return preferences[key];
    }
}
(function() {
    var Person,
        __hasProp = {}.hasOwnProperty;
    Person = (function() {
        function Person() {
            this.preferences = [];
        }
        Person.prototype.setPref = function(key, value) {
            return (this.preferences[key] = value);
        };
        Person.prototype.getPref = function(key) {
            return (this.preferences[key]);
        };
        
        return Person;
    });
})

var interactingEntity = new Person();
interactingEntity.setPref('display','console');

graph.addNode('A');
graph.addNode('B');
graph.addEdge('A','B');

//get some arbitrary node from the graph
graph.forEachNode(function(nodeObj) {
    console.log(nodeObj);
})