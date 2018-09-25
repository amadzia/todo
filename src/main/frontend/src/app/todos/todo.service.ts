import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo.model";

@Injectable()
export class TodoService {

    constructor(private http: HttpClient) {
    }

    getTodos() {
        return this.http.get('/api/todos');
    }

    saveTodo(todo: Todo, checked: boolean) {
        todo.completed = checked;
        return this.http.post('/api/tasks/save', todo);
    }
}
