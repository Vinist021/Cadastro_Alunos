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

import com.abutua.students_backend.models.Period;

import jakarta.annotation.PostConstruct;

@CrossOrigin
@RestController
public class PeriodsController {
    
    private List<Period> periods = new ArrayList<>();

    @GetMapping("periods")
    public List<Period> getPeriods() {
        return periods;
    }

    @GetMapping("periods/{id}")
    public ResponseEntity<Period> getPeriod(@PathVariable int id) {
        Period period = periods.stream()
                                .filter(p -> p.getId() == id)
                                .findFirst()
                                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Period not found"));

        return ResponseEntity.ok(period);
    }

    @PostConstruct
    public void init() {
        Period p1 = new Period();
        Period p2 = new Period();
        Period p3 = new Period();

        p1.setId(1);
        p1.setName("Manhã");

        p2.setId(2);
        p2.setName("Tarde");

        p3.setId(3);
        p3.setName("Noite");

        periods.add(p1);
        periods.add(p2);
        periods.add(p3);
    }

}
