import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    this.countryService.getCountry(id).subscribe((country) => {
      this.country = country;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
