const Mocha = require('mocha');

let mocha = new Mocha({
  ui: 'tdd'
});

mocha.addFile('./tests/1_unit-tests.js');
mocha.addFile('./tests/2_functional-tests.js');

exports.run = function() {
  mocha.run();
};
