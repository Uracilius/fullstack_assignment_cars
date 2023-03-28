import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../car';
import { RegisterService } from '../register.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { DateFormatPipe } from './date-format.pipe';
@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css'],
  providers: [DateFormatPipe]
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
  
    
  
  constructor(private registerService:RegisterService, private dateFormatPipe: DateFormatPipe, private sanitizerService:DomSanitizer) {
    
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
  sanitizeData(unsanitizedData:string){
    return this.sanitizerService.bypassSecurityTrustHtml(unsanitizedData);
  }

}
