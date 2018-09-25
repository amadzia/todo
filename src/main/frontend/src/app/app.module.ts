import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosAddComponent } from './todos/todos-add/todos-add.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosAddComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
