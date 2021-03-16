import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findage',
  templateUrl: './findage.component.html',
  styleUrls: ['./findage.component.css']
})
export class FindageComponent implements OnInit {
  dob: Date;
  ageYear;
  ageMonth;
  status = false;
  constructor() { }

  ngOnInit(): void {
  }

  findAge(ref) {
    this.status = true;
    this.dob = ref.value;
    let bdate = new Date(this.dob);
    console.log(bdate);

    let todayDate = new Date();
    console.log(todayDate);

    this.ageYear = todayDate.getFullYear() - bdate.getFullYear();
    

    this.ageMonth = todayDate.getMonth() - bdate.getMonth();

    if (this.ageMonth <= 0) {
      this.ageYear--;
      this.ageMonth = (12 + this.ageMonth);
    }
    if (todayDate < bdate) {
      this.ageMonth--;
      
    }  if (this.ageMonth == 12) {
      this.ageYear = this.ageYear + 1;
      this.ageMonth = 0;
    }
    
    console.log(this.ageYear);
    this.ageMonth = Math.abs(this.ageMonth);
    console.log(Math.abs(this.ageMonth));
  }

}
