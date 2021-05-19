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

var interactingEntity = new Person();
interactingEntity[]