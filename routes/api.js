"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", function (req, res) {
    const input = req.query.input;

    const num = convertHandler.getNum(input);
    const unit = convertHandler.getUnit(input);

    if (num === "invalid number" && unit === "invalid unit") {
      return res.send("invalid number and unit");
    }

    if (num === "invalid number") return res.send("invalid number");
    if (unit === "invalid unit") return res.send("invalid unit");

    const returnNum = parseFloat(convertHandler.convert(num, unit).toFixed(5));
    const returnUnit = convertHandler.getReturnUnit(unit);

    res.json({
      initNum: num,
      initUnit: unit === "l" ? "L" : unit,
      returnNum,
      returnUnit,
      string: convertHandler.getString(
        num,
        unit === "l" ? "L" : unit,
        returnNum,
        returnUnit,
      ),
    });
  });
};
