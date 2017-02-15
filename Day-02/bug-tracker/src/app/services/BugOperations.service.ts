import { IBug } from '../models/IBug';

export class BugOperations{
	createNew(id : number, name:string) : IBug{
		return {
			id : id,
			name : name,
			isClosed : false
		}
	}
	toggle(bug : IBug) : IBug {
		return {
			id : bug.id,
			name : bug.name,
			isClosed : !bug.isClosed
		}
	}
}