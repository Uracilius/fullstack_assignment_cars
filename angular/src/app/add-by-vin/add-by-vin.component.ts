import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-add-by-vin',
  templateUrl: './add-by-vin.component.html',
  styleUrls: ['./add-by-vin.component.css']
})
export class AddByVinComponent implements OnInit {
  car:Car = new Car();
  submitVinElement: HTMLScriptElement;
  
  constructor(private registerService:RegisterService) {
    
    this.submitVinElement = document.createElement("script");
    this.submitVinElement.src = "assets/javascript/submit.vin.element.js";
    document.body.appendChild(this.submitVinElement);
  }
  
  
  ngOnInit(): void {
  }
 submitVin(): void {
  
    // Retrieve VIN input element
    const vinInput = document.getElementById("vinInput") as HTMLInputElement;
  
    // Attach an event listener to submit button
    const vin = vinInput.value.trim();
  
    $.ajax({
      method: 'GET',
      url: `https://api.api-ninjas.com/v1/vinlookup?vin=${vin}`,
      headers: { 'X-Api-Key': 'IwFKMaGVtaSUQ+XmewVrvA==tSMCY5AL6jlpqeOl'},
      contentType: 'application/json',
      success: (result:any) => {
        this.car.name = result.wmi;
        this.car.color = "default";
        this.car.dateOfManufacture = result.years[0]+"-01-01";
        this.car.countryOfManufacture = result.countryOfManufacture;
        this.registerService.registerCar(this.car).subscribe(data=>{alert("Successfully registered")},error=>alert("Sorry, there has been a problem"))
        // Handle success response here
      },
      error: (jqXHR:any) => {
        console.error('Error: ', jqXHR.responseText);
        // Handle error response here
      }
    });
  }
}  
  
