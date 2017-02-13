var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
;
var Events = (function () {
    function Events() {
        this._eventHandlers = {};
    }
    Events.prototype.onChange = function (attrName, listenerFn) {
        this._eventHandlers[attrName] = this._eventHandlers[attrName] || [];
        this._eventHandlers[attrName].push(listenerFn);
    };
    Events.prototype.triggerChange = function (attrName) {
        var listenerFns = this._eventHandlers[attrName] || [];
        listenerFns.forEach(function (listenerFn) { return listenerFn(); });
    };
    return Events;
}());
var SalaryCalculator = (function (_super) {
    __extends(SalaryCalculator, _super);
    function SalaryCalculator() {
        _super.apply(this, arguments);
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
        if (this._data[attrName] === value)
            return;
        this._data[attrName] = value;
        this.triggerChange(attrName);
    };
    SalaryCalculator.prototype.calculate = function () {
        var gross = this.get('basic') + this.get('hra') + this.get('da');
        var net = gross * ((100 - this.get('tax')) / 100);
        this.set('salary', net);
    };
    return SalaryCalculator;
}(Events));
var calc = new SalaryCalculator();
calc.set('basic', 10000);
calc.set('hra', 5000);
calc.set('tax', 10);
calc.calculate();
console.log(calc.get('salary'));
