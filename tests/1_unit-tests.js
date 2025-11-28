const chai = require('chai');
let assert = chai.assert;

const ConvertHandler = require('../controllers/convertHandler.js');
let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  test('Whole number input', function(){
    assert.equal(convertHandler.getNum('32L'), 32);
  });

  test('Decimal input', function(){
    assert.equal(convertHandler.getNum('3.5kg'), 3.5);
  });

  test('Fractional input', function(){
    assert.equal(convertHandler.getNum('3/4mi'), 0.75);
  });

  test('Fractional input with decimal', function(){
    assert.equal(convertHandler.getNum('3.5/7km'), 0.5);
  });

  test('Error on double fraction', function(){
    assert.equal(convertHandler.getNum('3/4/7kg'), 'invalid number');
  });

  test('Default to 1 when no number is provided', function(){
    assert.equal(convertHandler.getNum('kg'), 1);
  });

  test('Valid units', function(){
    assert.equal(convertHandler.getUnit('32L'), 'l');
  });

  test('Invalid unit', function(){
    assert.equal(convertHandler.getUnit('32g'), 'invalid unit');
  });

  test('Return units', function(){
    assert.equal(convertHandler.getReturnUnit('gal'), 'l');
  });

  test('Spelled-out units', function(){
    assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
  });

  test('gal to L', function(){
    assert.approximately(convertHandler.convert(1,'gal'), 3.78541, 0.1);
  });

  test('L to gal', function(){
    assert.approximately(convertHandler.convert(1,'l'), 0.26417, 0.1);
  });

  test('mi to km', function(){
    assert.approximately(convertHandler.convert(1,'mi'), 1.60934, 0.1);
  });

  test('km to mi', function(){
    assert.approximately(convertHandler.convert(1,'km'), 0.62137, 0.1);
  });

  test('lbs to kg', function(){
    assert.approximately(convertHandler.convert(1,'lbs'), 0.453592, 0.1);
  });

  test('kg to lbs', function(){
    assert.approximately(convertHandler.convert(1,'kg'), 2.20462, 0.1);
  });

});
