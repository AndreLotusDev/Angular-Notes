import { Component, OnInit } from '@angular/core';
import { IAppState, decreaseCounter, increaseCounter } from './store/app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public counter$ = this.store.select('app')
  .pipe(map(m => m.counter));
  constructor(private store: Store<{app: IAppState}>) {

  }
  
  ngOnInit(): void {
    
  }

  public dispatchIncreaseCounter() {
    this.store.dispatch(increaseCounter());
  }

  public dispatchDecreaseCounter() {
    this.store.dispatch(decreaseCounter());
  }

}
