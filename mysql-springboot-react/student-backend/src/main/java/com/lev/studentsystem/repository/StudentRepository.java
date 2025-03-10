package com.lev.studentsystem.repository;

import com.lev.studentsystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//model sınıfımız ve ıdsinin veritipi
@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {
}
