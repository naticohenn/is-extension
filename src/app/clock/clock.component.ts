import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
 
  constructor() { }
  time: string;
  interval: any;
  greeting: string;

getTime(): void {
  this.interval = setInterval(() => {
  var hour = new Date().getHours();
  this.getGreeting(hour);
  this.time = new Date().toLocaleTimeString().replace(/:\d+.[A-Z]{2}/,'');
  }, 1000);
  };

  getGreeting(hour: number): void {
    if (hour >= 4 && hour <= 11) {
      this.greeting = "Good morning";
    } else if (hour >= 12 && hour <= 17) {
      this.greeting = "Good afternoon";
    } else {
      this.greeting = "Good evening";
    }
  };
  ngOnInit() {
    this.getTime();
  }
};
