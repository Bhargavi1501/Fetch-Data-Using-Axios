import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent implements OnInit {
  countryData:any=[];
  constructor(private ac:ActivatedRoute,private ds:DataService) { }

  ngOnInit(): void {
    //Read name value from url using ActivatedRoute object
    this.ac.params.subscribe(
      params => {
        let name= params["name"];
        console.log(name);

        //call method of DataService
        this.ds.getCountryDetails(name).subscribe(
          res => {
            this.countryData = res;
            console.log(this.countryData);
          },
          err => {
            //alert("Error in reading object");
            console.log(err);
          }
        )
      })
  }

}
