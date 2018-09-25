package com.example.todo.service;

import com.example.todo.domain.Todo;

public interface TodoService {

    Iterable<Todo> list();

    Todo save(Todo todo);
}
