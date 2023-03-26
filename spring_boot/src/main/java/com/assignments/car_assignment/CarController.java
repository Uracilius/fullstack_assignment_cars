package com.assignments.car_assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:54126")
@RequestMapping("cars")
public class CarController {
	
	@Autowired
	private CarRepositoryInterface cars;
	    //Following method is just a test to see whether the controller works or not.
		@GetMapping("/HelloCars")
		public String Hello(){
	    	return "Hello!";
	    }
		
	    @PostMapping("/createCar")
	    public String addCar(@RequestBody Car car) {
	    	
	        cars.save(car);
	        
	        return "Car successfuly saved to the repository";
	           
	    }
	       
	}
