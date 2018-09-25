import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo.model";
import {TodoService} from "../todo.service";

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

    todos: Todo[] = [];

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
        return this.todoService.getTodos()
            .subscribe(
                (todos: any[]) => {
                    this.todos = todos
                },
                (error) => console.log(error)
            );
    }

    onTodoChange($event, todo: Todo) {
        console.log("Todo has changed");
    }

    getDueDateLabel(todo: Todo) {
        return todo.completed ? 'badge badge-success' : 'badge badge-primary';
    }
}
