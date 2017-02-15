import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBug } from '../../models/IBug';

@Component({
	selector : 'bug-item',
	template : `
		<li>
 			<span class="bugname" (click)="toggle(data)" [ngClass]="{closed : data.isClosed}">{{data.name | trimtext:40 }}</span>
 			<div class="datetime">{{data.createdAt | elapsed}}</div>
 		</li>
	`
})
export class BugItemComponent{
	@Input()
	data : IBug ;

	@Output()
	onToggle : EventEmitter<IBug> = new EventEmitter<IBug>();

	toggle(bug : IBug){
		this.onToggle.emit(bug);
	}
}