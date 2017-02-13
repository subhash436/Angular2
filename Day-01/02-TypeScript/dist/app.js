;
var SalaryCalculator = (function () {
    function SalaryCalculator() {
        this._data = {
            basic: 0,
            hra: 0,
            da: 0,
            tax: 0,
            salary: 0
        };
    }
    SalaryCalculator.prototype.get = function (attrName) {
        return this._data[attrName];
    };
    SalaryCalculator.prototype.set = function (attrName, value) {
        this._data[attrName] = value;
    };
    SalaryCalculator.prototype.calculate = function () {
        var gross = this.get('basic') + this.get('hra') + this.get('da');
        var net = gross * ((100 - this.get('tax')) / 100);
        this.set('salary', net);
    };
    return SalaryCalculator;
}());
var calc = new SalaryCalculator();
calc.set('basic', 10000);
calc.set('hra', 5000);
calc.set('tax', 10);
calc.calculate();
console.log(calc.get('salary'));
