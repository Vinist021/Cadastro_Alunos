package com.abutua.students_backend.resources;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.abutua.students_backend.models.Student;

import jakarta.annotation.PostConstruct;
@CrossOrigin
@RestController
public class StudentsController {
    
    private List<Student> students = new ArrayList<>();

    @PostMapping("students")
    public ResponseEntity<Student> save(@RequestBody Student student) {
        student.setId(students.size() + 1);
        students.add(student);

        URI location = ServletUriComponentsBuilder
                       .fromCurrentRequest()
                       .path("/{id}")
                       .buildAndExpand(student.getId())
                       .toUri();
        
        return ResponseEntity.created(location).body(student);
    }

    @PostConstruct
    public void init() {
        Student s1 = new Student();
        Student s2 = new Student();
        Student s3 = new Student();

        s1.setEmail("aaa@gmail.com");
        s1.setId(1);
        s1.setIdCurso(1);
        s1.setName("adalberto");
        s1.setIdPeriod(1);
        s1.setPhone("(15) 99184-3750");

        s2.setEmail("beltrano@gmail.com");
        s2.setId(2);
        s2.setIdCurso(2);
        s2.setName("beltrano");
        s2.setIdPeriod(2);
        s2.setPhone("(11) 33481-1130");

        s3.setEmail("ccc@gmail.com");
        s3.setId(3);
        s3.setIdCurso(3);
        s3.setName("cicrano@gmail.com");
        s3.setIdPeriod(3);
        s3.setPhone("(17) 88431-8060");

        students.add(s1);
        students.add(s2);
        students.add(s3);
    }

    @GetMapping("students/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable int id) {
        Student stud = students.stream()
                                .filter(s -> s.getId() == id)
                                .findFirst()
                                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found"));

        return ResponseEntity.ok(stud);
    }

    @GetMapping("students")
    public List<Student> getStudents() {
        return students;
    }
    
}
