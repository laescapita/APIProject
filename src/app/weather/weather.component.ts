import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from 'src/app/services/weather-api.service';
//import {enableProdMode} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  data: any;
  constructor(private weatherService: WeatherAPIService) { }

  ngOnInit() {
  interval(1000).subscribe(_ => this.getWeatherData());
  }

  getWeatherData() {
    this.weatherService.getWeatherForecast().subscribe((result) => {
      console.log('got weather data', result);
      this.data = result;
    },
      (error) => {
        console.log('got error', error);
      });
  }
}
