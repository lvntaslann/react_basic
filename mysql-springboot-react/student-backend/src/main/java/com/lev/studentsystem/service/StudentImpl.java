package com.lev.studentsystem.service;

import com.lev.studentsystem.model.Student;
import com.lev.studentsystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StudentImpl implements StudentService{
    @Autowired
    private StudentRepository studentRepository;


    @Override
    public Student saveStudent(Student student) {
       return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
