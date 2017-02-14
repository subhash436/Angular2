export class Calculator{
	number1 : number = 100;
	number2 : number = 200;
	result : number;

	add() : void {
		this.result = this.number1 + this.number2;
	}
	subtract() : void {
		this.result = this.number1 - this.number2;
	}
	multiply() : void {
		this.result = this.number1 * this.number2;
	}
	divide() : void {
		this.result = this.number1 / this.number2;
	}
}