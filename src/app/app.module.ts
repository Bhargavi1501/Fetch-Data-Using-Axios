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
import { TemplateComponent } from './template/template.component';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    FindageComponent,
    CountriesComponent,
    CountrydetailsComponent,
    TemplateComponent,
    SearchPipe,
    SearchComponent
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
