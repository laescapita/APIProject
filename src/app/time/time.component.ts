import { Component, OnInit } from '@angular/core';
import { TimeApiService } from '../services/time-api.service';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  private updateSubscription: Subscription;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  constructor(private timeService: TimeApiService) { }

  ngOnInit() {
    this.getValues();
    this.updateSubscription = interval(1000).subscribe(
      (val) => { this.updateStats(),this.getValues()
    });
  }

  getValues(){
    this.timeService.getValues().subscribe((result) =>{
      console.log('time results', result);
      this.days = result.days;
      this.hours = result.hours;
      this.minutes = result.minutes;
      this.seconds = result.seconds;
    }, (error) =>{
      console.log('time broke', error);
    });
  }

  private updateStats() {
    console.log('This is Test Branch');

}

}
