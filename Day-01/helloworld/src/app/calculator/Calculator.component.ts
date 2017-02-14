import {Component} from '@angular/core';
import { Calculator } from '../models/Calculator';

@Component({
	selector  : 'calculator',
	template : `
		<input type="number" [(ngModel)]="calculator.number1" />
		<input type="number" [(ngModel)]="calculator.number2" />
		<select #selectOperator>
			<option value="add">Add</option>
			<option value="subtract">Subtract</option>
			<option value="multiply">Multiply</option>
			<option value="divide">Divide</option>
		</select>
		<input type="button" value="Calculate" (click)="triggerCalculate(selectOperator)" />
		<div>{{calculator.result}}</div>
	`
})
export class CalculatorComponent{
	calculator : Calculator = new Calculator();

	triggerCalculate(selectOperator){
		this.calculator[selectOperator.value]();
	}
}