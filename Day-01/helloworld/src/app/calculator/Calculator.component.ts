import {Component} from '@angular/core';
import { Calculator } from '../models/Calculator';

@Component({
	selector  : 'calculator',
	template : `
		<input type="text" #txtNumber1 />
		<input type="text" #txtNumber2 />
		<select #selectOperator>
			<option value="add">Add</option>
			<option value="subtract">Subtract</option>
			<option value="multiply">Multiply</option>
			<option value="divide">Divide</option>
		</select>
		<input type="button" value="Calculate" (click)="triggerCalculate(txtNumber1, txtNumber2, selectOperator)" />
		<div>{{calculator.result}}</div>
	`
})
export class CalculatorComponent{
	calculator : Calculator = new Calculator();

	triggerCalculate(txtNumber1, txtNumber2, selectOperator){
		this.calculator.number1 = parseInt(txtNumber1.value,10);
		this.calculator.number2 = parseInt(txtNumber2.value, 10);
		this.calculator[selectOperator.value]();
	}
}