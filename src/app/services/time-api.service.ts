import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TimeApiService {

  constructor(private httpClient: HttpClient) { }
  getValues(): Observable<any> {
    return new Observable(observable => {
      this.httpClient.get('https://localhost:44339/values').subscribe((result) => {
        //give copy of data
        observable.next(result);
        //done sending data
        observable.complete();
      }, (error) => {
        //give error
        observable.error(error);
        //done giving error
        observable.complete();
      })
    })
  }
}