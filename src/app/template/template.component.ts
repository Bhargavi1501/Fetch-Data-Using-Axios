import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  Users = [];
  constructor() { }
  userModal = new User();

  ngOnInit(): void {
  }
  onSubmit(){
    let newObj = new User();

    newObj = {...this.userModal};
    this.Users.push(newObj);

    console.log(this.Users)
  }
}
class User{
  public name:string;
  public password:string;
  public gender:string;
  public designation:string;
  public aboutYourself:string;
}