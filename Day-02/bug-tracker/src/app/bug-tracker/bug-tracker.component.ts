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
  		this.bugs = this.bugs.concat([newBug])
  	}

  	toggle(bug : IBug){
  		//bug.isClosed = !bug.isClosed;
      this.bugs = this.bugs.map(function(b){
        if (b === bug){
          b.isClosed = !b.isClosed;
        }
        return b;
      });
  	}

  	removeClosed(){
  		this.bugs = this.bugs.filter(b => !b.isClosed);
  	}
	
	

}
