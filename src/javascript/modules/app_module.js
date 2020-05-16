//This file imports modules

//Import module/file person.js. In Node.js one needs to add path to file...
var person = require('./person');

console.log("Name: " + person.name);
console.log("Age: " + person.age);
