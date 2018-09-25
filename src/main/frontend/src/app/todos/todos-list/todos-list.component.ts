import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo.model";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos: Todo[]=[];

  constructor() { }

  ngOnInit() {
      this.todos.push(new Todo(1, "Todo #1", true, "09/25/18"));
      this.todos.push(new Todo(2, "Todo #2", false, "09/25/18"));
      this.todos.push(new Todo(3, "Todo #3", false, "09/25/18"));
  }

    onTodoChange(event, todo: Todo) {
        console.log("Todo has changed");
    }

    getDueDateLabel(todo: Todo) {
        return todo.completed ? 'badge badge-success' : 'badge badge-primary';
    }
}
