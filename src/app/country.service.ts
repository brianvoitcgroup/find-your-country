import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from './country.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  baseUrl = 'https://restcountries.eu/rest/v2';
  apiKey = environment.weatherAPI;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/all`).pipe(
      map((res) => {
        return res.map((country) => {
          return { ...country, id: country.alpha2Code } as Country;
        });
      }),
      catchError(this.handleError<Country[]>('getCountries', []))
    );
  }

  getCountry(id: string): Observable<Country> {
    return this.http.get<Country>(`${this.baseUrl}/alpha/${id}`).pipe(
      map((country) => {
        return { ...country, id: country.alpha2Code } as Country;
      }),
      catchError(this.handleError<Country>('getCountry'))
    );
  }

  getWeather(capital: string): Observable<any> {
    return this.http
      .get<any>(
        `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${capital}&aqi=no`
      )
      .pipe(catchError(this.handleError<any>('getWeather')));
  }

  // searchCountries(term: string): Observable<Country[]> {
  //   return this.http
  //     .get<Country[]>(`${this.baseUrl}/rest/v2/name/${term}`)
  //     .pipe(
  //       catchError(this.handleError<Country[]>('searchCountries', []))
  //     );
  // }
}
