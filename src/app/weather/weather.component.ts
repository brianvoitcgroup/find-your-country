import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass'],
})
export class WeatherComponent implements OnInit {
  @Input() capital!: string;
  weather!: any;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.countryService.getWeather(this.capital).subscribe((weather) => {
      return (this.weather = weather.current);
    });
  }
}
