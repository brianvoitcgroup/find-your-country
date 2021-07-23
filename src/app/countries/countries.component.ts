import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country.model';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.sass'],
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [];
  wholeCountries: Country[] = [];
  private searchTerms = new Subject<string>();

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService
      .getCountries()
      .subscribe((arr) => (this.wholeCountries = arr));
    this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.searchCountries(term))
      )
      .subscribe((arr) => (this.countries = arr));
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  searchCountries(term: string): Observable<Country[]> {
    return of(
      this.wholeCountries.filter(({ name }) =>
        name.toUpperCase().includes(term.toUpperCase())
      )
    );
  }
}
