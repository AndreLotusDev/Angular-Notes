import { Component, OnInit } from '@angular/core';
import { AppStore } from '../stores/app-store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(public appStore: AppStore) { }

  ngOnInit() {
  }

}
