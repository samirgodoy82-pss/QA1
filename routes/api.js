'use strict';

const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {

  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {

    let input = req.query.input;
    let num = convertHandler.getNum(input);
    let unit = convertHandler.getUnit(input);

    if (num === 'invalid number' && unit === 'invalid unit') {
      return res.json({ error: "invalid number and unit" });
    }
    if (num === 'invalid number') {
      return res.json({ error: "invalid number" });
    }
    if (unit === 'invalid unit') {
      return res.json({ error: "invalid unit" });
    }

    let returnUnit = convertHandler.getReturnUnit(unit);
    let returnNum = convertHandler.convert(num, unit);
    let string = convertHandler.getString(num, unit, returnNum, returnUnit);

    res.json({
      initNum: num,
      initUnit: unit,
      returnNum: Number(returnNum.toFixed(5)),
      returnUnit: returnUnit,
      string
    });

  });

};
