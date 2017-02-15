import { IBug } from '../models/IBug';

export class BugStorage{
	private _storage : any = window.localStorage;
	private _currentBugId = -1;

	getAll() : Array<IBug> {
		let result = [];
		for(let i = 0; i < this._storage.length; i++){
			let dataAsString = this._storage.getItem(this._storage.key(i));
			let bug = JSON.parse(dataAsString);
			this._currentBugId = this._currentBugId > bug.id ? this._currentBugId : bug.id;
			result.push(bug);
		}
		return result;
	}
	addNew(bugName : string) :  IBug {
		let newBug = {
			id : ++this._currentBugId,
			name : bugName,
			isClosed : false
		};
		this.saveBug(newBug);
		return newBug;
	}
	private saveBug(bug : IBug){
		this._storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	remove(bug : IBug) : void {
		this._storage.removeItem(bug.id.toString());
	}
	toggle(bug : IBug) : IBug{
		var toggledBug = {
			id : bug.id,
			name : bug.name,
			isClosed : !bug.isClosed
		};
		this.saveBug(toggledBug);
		return toggledBug;
	}
}