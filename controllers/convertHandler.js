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

    result = result[0];

    if (result.split('/').length > 2) return 'invalid number';

    try {
      result = eval(result);
    } catch (e) {
      return 'invalid number';
    }

    return isNaN(result) ? 'invalid number' : result;
  };

  // GET UNIT
  this.getUnit = function(input) {
    const unit = input.replace(/^[\d/.]*/,'').toLowerCase();
    if (validUnits.includes(unit)) return unit;
    return 'invalid unit';
  };

  // RETURN UNIT
  this.getReturnUnit = function(initUnit) {
    const map = {
      gal:'l',
      l:'gal',
      mi:'km',
      km:'mi',
      lbs:'kg',
      kg:'lbs'
    };
    return map[initUnit];
  };

  // SPELL OUT UNIT
  this.spellOutUnit = function(unit) {
    return spelledUnits[unit];
  };

  // CONVERSION
  this.convert = function(initNum, initUnit) {
    const conversionRates = {
      gal: 3.78541,
      lbs: 0.453592,
      mi: 1.60934
    };

    let num = initNum;
    let unit = initUnit.toLowerCase();

    switch (unit) {
      case 'gal': return num * conversionRates.gal;
      case 'l':   return num / conversionRates.gal;
      case 'lbs': return num * conversionRates.lbs;
      case 'kg':  return num / conversionRates.lbs;
      case 'mi':  return num * conversionRates.mi;
      case 'km':  return num / conversionRates.mi;
    }
  };

  // STRING
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
