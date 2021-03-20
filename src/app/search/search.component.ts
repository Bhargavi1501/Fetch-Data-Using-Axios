import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchOption:any;
  searchTerm:any;
  dataArray: any = [];
  constructor(private ds: DataService) { }
  keys: any;
  ngOnInit(): void {
    //get data from service object
    this.ds.getPosts().subscribe(
      res => {
        this.dataArray = res;
        console.log(this.dataArray);
        this.keys = Object.keys(this.dataArray[0]);
        console.log(this.keys);
      },
      err => {
        alert("Something went wrong");
        console.log(err);
      })
  }
  check(){
    console.log(this.searchOption);
    console.log(this.searchTerm);
  }

}
