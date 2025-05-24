package com.abutua.students_backend.models;

public class Period {

    private int id;
    private String name;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    //Métodos Construtores
    public Period(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Period() {

    }
}
