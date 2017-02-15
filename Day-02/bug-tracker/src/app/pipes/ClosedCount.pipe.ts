import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
	name : 'closedCount',
	pure : true
})
export class ClosedCountPipe implements PipeTransform{
	transform(data : Array<IBug> = []) : number{
		return data.reduce((result : number, bug : IBug) => bug.isClosed ? ++result : result, 0);
	}
}