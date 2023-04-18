package com.assignments.car_assignment;


import org.springframework.data.jpa.repository.JpaRepository;
 
public interface CarRepositoryInterface extends JpaRepository<Car, Integer> {
}