import { IBug } from '../models/IBug';
import { BugOperations } from './BugOperations.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BugStorage{
	private _storage : any = window.localStorage;
	private _currentBugId = -1;

	constructor(private _bugOperations : BugOperations){

	}
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
		let newBug = this._bugOperations.createNew(++this._currentBugId, bugName);
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
		var toggledBug = this._bugOperations.toggle(bug);
		this.saveBug(toggledBug);
		return toggledBug;
	}
}