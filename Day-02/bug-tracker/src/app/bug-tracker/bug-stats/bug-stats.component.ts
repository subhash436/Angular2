import { Component, Input } from '@angular/core';
import { IBug } from '../../models/IBug';

@Component({
	selector : 'bug-stats',
	template : `
		<section class="stats">
		 	<span class="closed">{{getClosedCount()}}</span>
		 	<span> / </span>
		 	<span>{{data.length}}</span>
		 </section>
	`
})
export class BugStatsComponent{

	@Input()
	data : Array<IBug> = [];

	getClosedCount() : number{
		let result : number = 0;
		for(var i=0; i < this.data.length; i++)
			if (this.data[i].isClosed)
				++result;
		return result;
	}
}