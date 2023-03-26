package com.assignments.car_assignment;
import javax.persistence.*;
	@Entity
	@Table(name = "cars",  schema = "public")
	public class Car {
	    
		@Id
	    private String name;
		
		
	    private String color;
	    private String dateOfManufacture;
	    private String countryOfManufacture;
	    
	    public Car() {
	    	super();
	    }
		public Car(String name, String color, String dateOfManufacture, String countryOfManufacture) {
			super();
			this.name = name;
			this.color = color;
			this.dateOfManufacture = dateOfManufacture;
			this.countryOfManufacture = countryOfManufacture;
		}
		
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getColor() {
			return color;
		}
		public void setColor(String color) {
			this.color = color;
		}
		public String getDateOfManufacture() {
			return dateOfManufacture;
		}
		public void setDateOfManufacture(String dateOfManufacture) {
			this.dateOfManufacture = dateOfManufacture;
		}
		public String getCountryOfManufacture() {
			return countryOfManufacture;
		}
		public void setCountryOfManufacture(String countryOfManufacture) {
			this.countryOfManufacture = countryOfManufacture;
		}
	 
	}
