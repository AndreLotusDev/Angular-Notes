import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobxAngularModule } from 'mobx-angular';
import { AppStore } from './stores/app-store';
import { CounterComponent } from './counter/counter.component';
import { CounterModule } from './counter/counter.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MobxAngularModule,
    CounterModule
  ],
  providers: [
    AppStore
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  constructor(public appStore: AppStore) {}

  ngOnInit(): void {
    
  }
  
  increment() {
    this.appStore.increment();
  }

  decrement() {
    this.appStore.decrement();
  }

}
