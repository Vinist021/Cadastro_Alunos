package com.abutua.students_backend.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.abutua.students_backend.models.Course;

import jakarta.annotation.PostConstruct;
@CrossOrigin
@RestController
public class CoursesController {

    private List<Course> courses = new ArrayList<>();
    
    @GetMapping("courses")
    public List<Course> getCourses() {
        return courses;
    }

   
    @GetMapping("courses/{id}")
    public ResponseEntity<Course> getCourse(@PathVariable int id) {
         Course course = courses.stream()
                                .filter(c -> c.getId() == id)
                                .findFirst()
                                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found"));

        return ResponseEntity.ok(course);
    }

     @PostConstruct
    public void init() {
        Course c1 = new Course();
        Course c2 = new Course();
        Course c3 = new Course();

        c1.setId(1);
        c1.setName("Angular");

        c2.setId(2);
        c2.setName("SQL");

        c3.setId(3);
        c3.setName("Java");

        courses.add(c1);
        courses.add(c2);
        courses.add(c3);
    }
}
