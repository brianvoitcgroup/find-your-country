import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [AppComponent, CountriesComponent, CountryDetailComponent, WeatherComponent],
  imports: [BrowserModule, RoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
