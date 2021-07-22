import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Country } from '../country.model';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.sass'],
})
export class CountryDetailComponent implements OnInit {
  country!: Country;
  weather?: any = {};

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.countryService.getCountry(id).subscribe((c) => {
      this.country = c;
      this.getWeather();
    });
  }

  getWeather(): void {
    const capital = this.country.capital;
    this.countryService
      .getWeather(capital)
      .subscribe((w) => (this.weather = w));
  }

  goBack(): void {
    this.location.back();
  }
}
