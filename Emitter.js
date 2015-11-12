// create a function constructor Emitter and initiate with an empty object
function Emitter() {
	this.events = {};
}

// create the on method
Emitter.prototype.on = function (type, listener) {
	
}

// create the emit method
Emitter.prototype.emit = function (type) {
	
}

module.exports = Emitter; 