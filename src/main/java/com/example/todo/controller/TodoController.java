package com.example.todo.controller;

import com.example.todo.domain.Todo;
import com.example.todo.service.TodoService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Todo> list() {
        return todoService.list();
    }

    @PostMapping("/save")
    public Todo saveTodo(@RequestBody Todo todo) {
        return todoService.save(todo);
    }
}
