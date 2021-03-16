import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  population;
  p1;
  constructor(private d: DataService) { }
  
  ngOnInit(): void {

    this.d.getData().subscribe(
      res=>{
        this.population = res["message"];
        console.log(this.population);
      },
      err=>{
        alert("Something went wrong");
        console.log(err);
      }
    )
  }
}
