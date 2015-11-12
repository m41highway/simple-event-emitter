// create a function constructor Emitter and initiate with an empty object
function Emitter() {
	this.events = {};
}

// implement the on method body; push the listener to the array
Emitter.prototype.on = function (type, listener) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}

// implement the emit method body; iterate the array and execute the listener
Emitter.prototype.emit = function (type) {
	if (this.events[type]) {
		this.events[type].forEach(function (listener){
			listener();
		});
	}
}

module.exports = Emitter; 