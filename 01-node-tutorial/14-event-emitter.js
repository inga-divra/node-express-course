const EventEmitter = require('events');

//on -listen event
//emit - emit event
//Это концепция, когда один объект может "слушать" события,
//а другой объект может "выдавать" (или "излучать") эти события.

const customEmitter = new EventEmitter();
customEmitter.on('response', (name, id) => {
  console.log(`data received from USER ${name} with id:${id}`);
});

customEmitter.emit('response', 'John', 34);
