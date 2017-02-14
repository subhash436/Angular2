import { Component } from '@angular/core';

@Component({
	selector : 'greeter',
	template : `
		<h2>{{message}}</h2>
		<label for="">Name :</label>
		<input type="text" #txtName/>
		<input type="button" value="Click Me" (click)="onClickMe(txtName)" />
		`
})
export class GreetComponent{
	message : string = '';

	onClickMe(ctrl){
		this.message = 'Hello ' + ctrl.value + ' Welcome to Angular 2!';
	}
}