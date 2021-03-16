import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FindageComponent } from './findage/findage.component';
import { CountriesComponent } from './countries/countries.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    FindageComponent,
    CountriesComponent,
    CountrydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
