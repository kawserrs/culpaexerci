const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listen for the 'aria-hidden' event
emitter.on('aria-hidden', (isHidden) => {
    console.log(`aria-hidden set to ${isHidden}`);
});

// Emit the 'aria-hidden' event with the value true
emitter.emit('aria-hidden', true);
