import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { DataComponent } from './data/data.component';
import { FindageComponent } from './findage/findage.component';
import { SearchComponent } from './search/search.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {path:"data",component:DataComponent},
  {path:"findage",component:FindageComponent},
  {path:"countries",component:CountriesComponent},
  {path:"countrydetails/:name",component:CountrydetailsComponent},
  {path:"template",component:TemplateComponent},
  {path:"search",component:SearchComponent},
  {path:"",redirectTo:"/search",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
