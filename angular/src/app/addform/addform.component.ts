import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../car';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  
  formValid: boolean = false;

  validateForm() {
    this.formValid = !!(this.car.color && this.car.dateOfManufacture && this.car.countryOfManufacture);
  }

  populateBoxElement: HTMLScriptElement;
  checkInputElement: HTMLScriptElement;
  //Creating Car object
  car:Car = new Car();
  constructor(private registerService:RegisterService) {
    
    //Loading the script to populate Car Model box.
    this.populateBoxElement = document.createElement("script");
    this.populateBoxElement.src = "assets/javascript/populate.car.models.js";
    document.body.appendChild(this.populateBoxElement);


    
    this.checkInputElement = document.createElement("script");
    this.checkInputElement.src = "assets/javascript/check.input.js";
    document.body.appendChild(this.checkInputElement);
   }
   
  ngOnInit(): void {
  }
  
  carRegister(){
    console.log(this.car);
    this.registerService.registerCar(this.car).subscribe(data=>{alert("Successfully registered")},error=>alert("Sorry, there has been a problem"))
  }

}
