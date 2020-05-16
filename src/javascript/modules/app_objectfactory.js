

var factory = require('./objectfactory');

var person = factory();

console.log("Name: " + person.name);
console.log("Age: " + person.age);