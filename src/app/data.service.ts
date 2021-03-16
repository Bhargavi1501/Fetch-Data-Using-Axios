import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

 getData():Observable<any>{
    return this.hc.get("/getData");
  }

  getCountryDetails(name):Observable<any>{
    return this.hc.get("https://restcountries.eu/rest/v2/name/"+name);
  }
}
