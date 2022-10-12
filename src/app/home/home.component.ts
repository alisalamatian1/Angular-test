import { Component, OnInit } from '@angular/core';
import { Archive } from './archive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives : Archive[] = new Array;

  constructor() { 
    try {
      this.archives[0] = new Archive(2022, 9);
      this.archives[1] = new Archive(2022, 10);
      this.archives[2] = new Archive(2022, 11);
    } catch (e) {
      console.log(e);
    }
  }

  ngOnInit() {
  }

}
