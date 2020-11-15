import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventSettingsModel  } from '@syncfusion/ej2-angular-schedule';
import * as moment from 'moment';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  // template: `<ejs-schedule  height='550px' 
  //  [selectedDate]='selectedDate'
  //  [eventSettings]="eventSettings"> </ejs-schedule>`,
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnChanges {
  public selectedDate: Date = new Date(2020, 10, 14);

  isDisplay = true
  display() {
    this.isDisplay = !this.isDisplay;
  }
  public eventSettings: EventSettingsModel = {
    dataSource:  [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2020, 10, 12, 9, 30),
        EndTime: new Date(2020, 10, 12, 11, 0)
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2020, 10, 13 , 12, 0),
        EndTime: new Date(2020, 10, 13 , 14, 0)
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2020, 10, 9, 9, 30),
        EndTime: new Date(2020, 10, 9, 11, 0)
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2020, 10, 8, 13, 0),
        EndTime: new Date(2020, 10, 8, 14, 30)
    }]
};

onSubmit(form: NgForm){
  if (!form.valid) {
    return;
  }
  const startTime = form.value.startTime;
  const endTime = form.value.endTime;

  this.eventSettings.dataSource[4] = {
        Id: 5, 
        Subject: 'Hello World',
        startTime: new Date(startTime),
        endTime: new Date(endTime)
       };
       
      form.reset();
}
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {
  }

}
