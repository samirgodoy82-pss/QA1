function ConvertHandler() {
  const validUnits = ["gal", "l", "mi", "km", "lbs", "kg"];
  const spelledUnits = {
    gal: "gallons",
    l: "liters",
    mi: "miles",
    km: "kilometers",
    lbs: "pounds",
    kg: "kilograms",
  };

  // GET NUMBER
  this.getNum = function (input) {
    let result;

    const numMatch = input.match(/^[\d/.]+/);
    if (!numMatch) return 1;

    result = numMatch[0];

    if (result.split("/").length > 2) return "invalid number";

    try {
      result = eval(result);
    } catch (e) {
      return "invalid number";
    }

    return isNaN(result) ? "invalid number" : result;
  };

  // GET UNIT
  this.getUnit = function (input) {
    const unit = input.match(/[a-zA-Z]+$/);
    if (!unit) return "invalid unit";

    const val = unit[0].toLowerCase();

    const validUnits = ["gal", "l", "mi", "km", "lbs", "kg"];
    if (!validUnits.includes(val)) return "invalid unit";

    return val === "l" ? "L" : val;
  };

  // RETURN UNIT
  this.getReturnUnit = function (initUnit) {
    const map = {
      gal: "l",
      l: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs",
    };
    return map[initUnit.toLowerCase()];
  };

  // SPELL OUT UNIT
  this.spellOutUnit = function (unit) {
    const names = {
      gal: "gallons",
      L: "liters",
      mi: "miles",
      km: "kilometers",
      lbs: "pounds",
      kg: "kilograms",
    };
    return names[unit];
  };

  // CONVERSION
  this.convert = function (initNum, initUnit) {
    const factors = {
      gal: 3.78541,
      L: 1 / 3.78541,
      mi: 1.60934,
      km: 1 / 1.60934,
      lbs: 0.453592,
      kg: 1 / 0.453592,
    };

    const result = initNum * factors[initUnit];
    return parseFloat(result.toFixed(5));
  };

  // STRING
  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
