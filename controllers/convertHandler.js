function ConvertHandler() {
  // 1. GET NUMBER
  this.getNum = function (input) {
    let result = input.match(/^[\d\.\/]+/);

    if (!result) return 1;

    result = result[0];

    // validar doble fracción
    if (result.split("/").length > 2) return "invalid number";

    let value;
    if (result.includes("/")) {
      const [n, d] = result.split("/");
      if (isNaN(n) || isNaN(d)) return "invalid number";
      value = parseFloat(n) / parseFloat(d);
    } else {
      if (isNaN(result)) return "invalid number";
      value = parseFloat(result);
    }

    return value;
  };

  // 2. GET UNIT
  this.getUnit = function (input) {
    let result = input.match(/[a-zA-Z]+$/);
    if (!result) return "invalid unit";

    result = result[0].toLowerCase();

    const valid = ["gal", "l", "mi", "km", "lbs", "kg"];
    if (!valid.includes(result)) return "invalid unit";

    if (result === "l") return "L";
    return result;
  };

  // 3. RETURN UNIT
  this.getReturnUnit = function (initUnit) {
    const map = {
      gal: "L",
      L: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs",
    };
    return map[initUnit];
  };

  // 4. SPELLED OUT
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

  // 5. CONVERT
  this.convert = function (initNum, initUnit) {
    const conversionRates = {
      gal: 3.78541,
      L: 1 / 3.78541,
      lbs: 0.453592,
      kg: 1 / 0.453592,
      mi: 1.60934,
      km: 1 / 1.60934,
    };

    const rate =
      conversionRates[initUnit.toLowerCase()] || conversionRates[initUnit];

    const result = initNum * rate;

    return parseFloat(result.toFixed(5)); // 🔥 ESTA LÍNEA ES LA CLAVE
  };

  // 6. FINAL STRING
  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
