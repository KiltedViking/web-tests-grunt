//Prototypal inheritance
var human = {
	species: "human",
	create: function(/* name */ values) {
		var instance = Object.create(this);
		// instance.name = name;
		Object.keys(values).forEach(function(key) {
			instance[key] = values[key];
		});
		return instance;
	},
	saySpecies: function () {
		console.log(this.species);
	},
	sayName: function() {
		console.log(this.name);
	}
};

//Create instance
//Using single valued arguments
// var adam = human.create("Adam");

//Using array arguments
var adam = human.create({ name: "Adam" });

adam.sayName();

//First go at inheritance
// var musician = Object.create(human);
// musician.playInstrument = function() {
// 	console.log("Plays " + this.instrument);
// }

var musician = human.create({
	species: "musician",
	playInstrument: function() {
		console.log("Plays " + this.instrument);
	}
});

var will = musician.create( { name: "Will", instrument: "Trombone"} );