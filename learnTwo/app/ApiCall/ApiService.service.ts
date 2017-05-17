import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class ApiService {

  //private url = "https://api.edmunds.com/{endpoint}?fmt={response format}&api_key={API key}";

  private url = "https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=srdk5uffpd7na4mg6bfj2yyr";


  constructor(private _http: Http){
    
  }
  
  getVehicles() {
    return this._http.get(this.url)
            .map(result => result.json()); 
  }
  
}