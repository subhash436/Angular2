import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UtilsModule } from '../utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugStatsComponent } from './bug-tracker/bug-stats/bug-stats.component';


import { ClosedCountPipe } from './pipes/ClosedCount.pipe';
import { BugStorage } from './services/BugStorage.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilsModule

  ],
  providers: [BugStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
