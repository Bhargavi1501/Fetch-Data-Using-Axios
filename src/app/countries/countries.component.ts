import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries:any = [];
  constructor(private hc:HttpClient, private rt:Router) { }

  ngOnInit(): void {
    this.getCountriesData();
  }

  getCountriesData(){
    this.hc.get("https://restcountries.eu/rest/v2/all").subscribe(
      res=>{
        this.countries = res;
      },
      err=>{
        console.log(err)
        alert("Something went wrong");
      }
    )
  }
  

  displayCountryDetails(c){
    this.rt.navigate(["/countrydetails", c.name])
    //console.log(c.name);
  }
}
