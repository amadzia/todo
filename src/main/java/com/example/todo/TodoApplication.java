package com.example.todo;

import com.example.todo.domain.Todo;
import com.example.todo.service.TodoService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@SpringBootApplication
public class TodoApplication {

    public static void main(String[] args) {
        SpringApplication.run(TodoApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(TodoService todoService) {
        return args ->{
            todoService.save(new Todo(1L, "Create Spring Boot app", LocalDate.now(), true));
            todoService.save(new Todo(2L, "Create Angular App", LocalDate.now().plus(1, ChronoUnit.DAYS), false));
            todoService.save(new Todo(3L, "Run Spring Boot and Angular apps together", LocalDate.now().plus(2, ChronoUnit.DAYS), false));
        };
    }
}
