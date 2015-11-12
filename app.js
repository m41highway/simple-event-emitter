var Emitter = require('./Emitter');

var emitter = new Emitter();

// register my listener
emitter.on('hello', function (){
	console.log('Hi, how are you doing?');
});


// register my second listener
emitter.on('hello', function (){
	console.log('how are you?');
});





// fire the event
emitter.emit('hello');

