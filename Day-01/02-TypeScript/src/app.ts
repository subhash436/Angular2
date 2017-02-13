interface ICalculatorData{
	basic : number,
	hra : number,
	da : number,
	tax : number,
	salary : number
};

class SalaryCalculator{
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
		this._data[attrName] = value;
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