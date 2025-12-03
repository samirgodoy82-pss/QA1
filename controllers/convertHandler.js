function ConvertHandler() {
  
  const validUnits = ['gal','l','mi','km','lbs','kg'];
  const spelledUnits = {
    gal: 'gallons',
    l: 'liters',
    mi: 'miles',
    km: 'kilometers',
    lbs: 'pounds',
    kg: 'kilograms'
  };

  // GET NUMBER
  this.getNum = function(input) {
    let result;

    const numMatch = input.match(/^[\d/.]+/);
    if (!numMatch) return 1;

    result = numMatch[0];

    if (result.split('/').length > 2) return 'invalid number';

    try {
      result = eval(result);
    } catch (e) {
      return 'invalid number';
    }

    return isNaN(result) ? 'invalid number' : result;
  };

  this.getUnit = function (input) {
    const result = input.match(/[a-zA-Z]+$/);
    if (!result) return "invalid unit";

    const unit = result[0].toLowerCase();
    const validUnits = ["gal", "l", "mi", "km", "lbs", "kg"];

    return validUnits.includes(unit) ? unit : "invalid unit";
  };

  this.getReturnUnit = function (initUnit) {
    const map = {
      gal: "L",
      l: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs",
    };
    return map[initUnit];
  };

  this.spellOutUnit = function (unit) {
    const names = {
      gal: "gallons",
      L: "liters",
      lbs: "pounds",
      kg: "kilograms",
      mi: "miles",
      km: "kilometers",
    };
    return names[unit];
  };

  this.convert = function (num, unit) {
    const rates = {
      gal: 3.78541,
      L: 3.78541,
      lbs: 0.453592,
      kg: 0.453592,
      mi: 1.60934,
      km: 1.60934,
    };

    switch (unit) {
      case "gal":
        return num * 3.78541;
      case "l":
        return num / 3.78541;
      case "lbs":
        return num * 0.453592;
      case "kg":
        return num / 0.453592;
      case "mi":
        return num * 1.60934;
      case "km":
        return num / 1.60934;
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
