function ConvertHandler() {
  this.getNum = function (input) {
    const result = input.match(/^[^a-zA-Z]*/)[0];

    if (result === "") return 1;

    // Double fraction check
    const fractionParts = result.split("/");
    if (fractionParts.length > 2) return "invalid number";

    // Evaluate fraction or decimal
    let number = result.includes("/")
      ? parseFloat(fractionParts[0]) / parseFloat(fractionParts[1])
      : parseFloat(result);

    if (isNaN(number)) return "invalid number";
    return number;
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
