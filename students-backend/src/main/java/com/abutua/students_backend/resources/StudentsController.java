package com.abutua.students_backend.resources;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.abutua.students_backend.models.Student;

import jakarta.annotation.PostConstruct;

@RestController
public class StudentsController {
    
    // private List<Student> students = new ArrayList<>();

    // @PostMapping("students")
    // public ResponseEntity<Student> save(@RequestBody Student student) {
    //     student.setId(students.size() + 1);
    //     students.add(student);

    //     URI location = ServletUriComponentsBuilder
    //                    .fromCurrentRequest()
    //                    .path("/{id}")
    //                    .buildAndExpand(student.getId())
    //                    .toUri();
        
    //     return ResponseEntity.created(location).body(student);
    // }

    // @PostConstruct
    // public void init() {
    //     Student s1 = new Student();

    //     s1.setEmail("aaa@gmail.com");
    //     s1.setId(1);
    //     s1.setIdCurso(2);
    //     s1.setName("joaoiznho");
    //     s1.setPeriod(3);
    //     s1.setPhone("15519814");

    //     students.add(s1);

    //     Student s2 = new Student();

    //     s2.setEmail("bbb@gmail.com");
    //     s2.setId(2);
    //     s2.setIdCurso(2);
    //     s2.setName("joaozao");
    //     s2.setPeriod(3);
    //     s2.setPhone("15519814");

    //     students.add(s2);
    // }

    // @GetMapping("students/{id}")
    // public ResponseEntity<Student> getStudent(@PathVariable int id) {
    //     Student stud = students.stream()
    //                             .filter(s -> s.getId() == id)
    //                             .findFirst()
    //                             .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

    //     return ResponseEntity.ok(stud);
    // }

    // @GetMapping("students")
    // public List<Student> getStudents() {
    //     return students;
    // }
    
}
