interface ICalculatorData{
	basic : number,
	hra : number,
	da : number,
	tax : number,
	salary : number
};

interface ICallbackFn{
	function()
}

class Events{
	_eventHandlers = {};

	onChange(attrName : string, listenerFn : Function){
		this._eventHandlers[attrName] = this._eventHandlers[attrName] || [];
		this._eventHandlers[attrName].push(listenerFn);
	}
	triggerChange(attrName : string){
		let listenerFns = this._eventHandlers[attrName] || [];
		listenerFns.forEach(listenerFn => listenerFn());
	}
}

class SalaryCalculator extends Events{
	_data : ICalculatorData = {
		basic : 0,
		hra : 0,
		da : 0,
		tax : 0,
		salary : 0
	};

	get(attrName : string) : any {
		return this._data[attrName];
	}

	set(attrName : string, value : any){
		if (this._data[attrName] === value) return;
		this._data[attrName] = value;
		this.triggerChange(attrName);
	}

	calculate() : void{
		let gross = this.get('basic') + this.get('hra') + this.get('da');
		let net = gross * ((100-this.get('tax'))/100);
		this.set('salary', net);
	}
}

var calc = new SalaryCalculator();
calc.set('basic', 10000);
calc.set('hra', 5000);
calc.set('tax', 10);
calc.calculate();
console.log(calc.get('salary'));