//Modules
// Every file in node is a module, we have them by default
// require    - function to use modules
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
console.log(data);
