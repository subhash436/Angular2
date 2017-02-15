import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'sort',
	pure : true
})
export class SortPipe implements PipeTransform{
	transform(data : Array<any> = [], sortBy : string, isDescending : boolean = false ) : Array<any>{
		if (!sortBy) return data;
		let comparerFn = getComparerFor(sortBy);
		if (isDescending)
			comparerFn = getDescendingFor(comparerFn);
		data.sort(comparerFn);
		return data;
	}
}

interface IComparer{
	(t1:any, t2:any) : number
}

function getDescendingFor(comparerFn) : IComparer {
	return function(item1 : any, item2 : any) : number {
		return comparerFn(item1, item2) * -1;
	}
}
function getComparerFor(attrName : string) : IComparer  {
	return function(item1 : any, item2 : any) : number{
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}