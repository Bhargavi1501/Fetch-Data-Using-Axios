import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { DataComponent } from './data/data.component';
import { FindageComponent } from './findage/findage.component';

const routes: Routes = [
  {path:"data",component:DataComponent},
  {path:"findage",component:FindageComponent},
  {path:"countries",component:CountriesComponent},
  {path:"countrydetails/:name",component:CountrydetailsComponent},
  {path:"",redirectTo:"/countries",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
