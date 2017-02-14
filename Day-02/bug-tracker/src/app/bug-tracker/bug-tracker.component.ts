import { Component, OnInit } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
  selector: 'bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent {
	

	bugs : Array<IBug> = [];

  	addNew(bugName){
  		let newBug = {
  			name : bugName,
  			isClosed : false
  		};
  		this.bugs.push(newBug);
  	}

  	toggle(bug : IBug){
  		bug.isClosed = !bug.isClosed;
  	}

  	removeClosed(){
  		for(let i = this.bugs.length-1; i >=0;i--)
  			if (this.bugs[i].isClosed)
  				this.bugs.splice(i,1);
  	}
	
	

}
