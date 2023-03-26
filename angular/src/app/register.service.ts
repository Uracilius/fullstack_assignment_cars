import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl="http://localhost:8081/cars/createCar"

  constructor(private httpClient:HttpClient) {}
  registerCar(car:Car) : Observable<Object>{
    return this.httpClient.post(this.baseUrl,car);
  } 
}
