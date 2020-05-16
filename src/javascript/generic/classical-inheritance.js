//Node.js
function inherits(ctor, superCtor) {
	ctor.super_ = superCtor;
	ctor.prototype = Object.create(superCtor.prototype, {
		constructor: {
			value: ctor,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
};


//Dine class using classical prototype
var Person = function(name) {
	this.name = name;
}

Person.prototype.sayName = function() {
	console.log("Hi, my name is " + this.name);
};

//Create instances
var john = new Person("John");
var boby = new Person("Bobby");

//Call methods
john.sayName();


//*** Inheritance *********************
//Define subclass
var Musician = function(name, instrument) {
	Musician.super_.call(this, name);	 //Call method in super class
	this.instrument = instrument;
}

inherits(Musician, Person);	//Inherit from super class

Musician.prototype.getInstrument = function() {
	console.log(this.instrument);
}

//Create instance of subclass
var julia = new Musician("Julia", "Flute");

//Call methods
julia.sayName();
julia.getInstrument();