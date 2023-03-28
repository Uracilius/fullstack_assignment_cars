package com.assignments.car_assignment;
import javax.persistence.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import java.util.Date;

@Entity
@Table(name = "cars",  schema = "public")
public class Car {

	private String name;

	private String color;

	@Id
	@JsonDeserialize(using = LocalDateDeserializer.class)
	private Date dateOfManufacture;


	private String countryOfManufacture;

	public Car() {
		super();
	}

	public Car(String name, String color, Date dateOfManufacture, String countryOfManufacture) {
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

	public Date getDateOfManufacture() {
		return dateOfManufacture;
	}

	public void setDateOfManufacture(Date dateOfManufacture) {
		this.dateOfManufacture = dateOfManufacture;
	}

	public String getCountryOfManufacture() {
		return countryOfManufacture;
	}

	public void setCountryOfManufacture(String countryOfManufacture) {
		this.countryOfManufacture = countryOfManufacture;
	}

}
