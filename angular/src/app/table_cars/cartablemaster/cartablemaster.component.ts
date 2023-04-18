import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car';
import { GetCarsService } from 'src/app/get-cars.service';

@Component({
  selector: 'app-cartablemaster',
  templateUrl: './cartablemaster.component.html',
  styleUrls: ['./cartablemaster.component.css']
})
export class CartablemasterComponent implements OnInit {
  cars: Car[] = []; // initialize the cars property with an empty array
  selectedCar: Car | null = null; // Initialize selectedCar to null
  constructor(private getCarsService: GetCarsService) { 
  }

  ngOnInit(): void {
    this.getCars();
  }

  private getCars(){
    this.getCarsService.getCars().subscribe(data => {
      this.cars = data;
      console.log(this.cars);
    });
  }
  showDetails(car: Car) {
    this.selectedCar = car;
  }
}
