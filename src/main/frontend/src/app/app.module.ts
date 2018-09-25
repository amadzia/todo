import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosAddComponent } from './todos/todos-add/todos-add.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import {TodoService} from "./todos/todo.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosAddComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
