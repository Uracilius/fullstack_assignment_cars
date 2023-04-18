import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class GetCarsService {
  baseUrl="http://localhost:8081/cars/getCars"

  constructor(private httpClient:HttpClient) {}
  getCars() : Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.baseUrl);
  } 
}
