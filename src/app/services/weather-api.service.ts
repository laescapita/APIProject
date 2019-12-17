import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private http: HttpClient) {

  }

  getWeatherForecast(): Observable<any> {
    return new Observable(observable => {
      this.http.get('https://localhost:44339/weatherforecast').subscribe((result) => {
        //give copy of data
        observable.next(result);
        //done spending data
        observable.complete();
      },
        (error) => {
          //give error
          observable.error(error);
          //done giving error
          observable.complete();
        }
      )
    })
  }
}
