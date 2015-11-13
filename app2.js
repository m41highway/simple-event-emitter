// using node built-in event emitter
var Events = require('events').EventEmitter;

var emitter = new Events();

// register listener
emitter.on('hello', function (){
	console.log('How are you from built-in emitter');
});

emitter.emit('hello');