import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule,
    FormsModule,
    CommonModule
   ],
  declarations: [ 
    AppComponent, TasksComponent
   ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }