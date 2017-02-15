import { Component, OnInit } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugStorage } from '../services/BugStorage.service';

declare var fetch;

@Component({
  selector: 'bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit{
	
  //private _bugStorage = new BugStorage();

	bugs : Array<IBug> = [];

  constructor(private _bugStorage : BugStorage){

  }

  ngOnInit(){
    //this.bugs = this._bugStorage.getAll();
    this.bugs = [];

    fetch('http://localhost:3000/bugs')
      .then(response => response.json())
      .then(bugs => {
         this.bugs = bugs;
      });

  }

  	addNew(bugName : string){
  		/*let newBug = this._bugStorage.addNew(bugName);
  		this.bugs = this.bugs.concat([newBug])*/

      var newBugData = {
        id : 0,
        name : bugName,
        isClosed : false,
        createdAt : new Date()
      };

      return fetch('http://localhost:3000/bugs', {
            headers : {
                'content-type' :'application/json'
            },
            method : 'POST',
            body : JSON.stringify(newBugData)
        })
        .then((response : any) => response.json())
        .then(newBug => {
          this.bugs = this.bugs.concat([newBug]);
        });
  	}

  	toggle(bug : IBug){
  		//bug.isClosed = !bug.isClosed;
      
      this.bugs = this.bugs.map((b) => {
        if (bug.id === b.id)
          return this._bugStorage.toggle(b);
        return b;
      });
  	}

  	removeClosed(){
      this.bugs.forEach(b => {
        if (b.isClosed) this._bugStorage.remove(b);
      });
  		this.bugs = this.bugs.filter(b => !b.isClosed);
  	}
	
	

}
