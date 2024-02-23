import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit, OnDestroy {
  _myObservable: Subscription | null = null;

  ngOnDestroy(): void {
    this._myObservable?.unsubscribe();
  }
  ngOnInit(): void {

    //Generating a runtime error
    // this.myPromise('Andre').then((res) => console.log(res));

    //return a promise without an error
    // this.myPromise('Jose').then((res) => console.log(res));

    //subscribe the myObservable function
    this._myObservable = this.myObservable('Andre').subscribe((res) => console.log(res));
  }
  title = 'RXJS';

  myPromise(name: string) : Promise<string>{
    return new Promise((resolve, reject) => {
      //reject if starts with a case insensitive
      if(name.toLowerCase().startsWith('a')){
        setTimeout(() => reject('Name can not start with A'), 1000);
      }

      resolve(name);
    })
  }

  myObservable(name: string) : Observable<string>{
    return new Observable((observer) => {
      setInterval(() => observer.next(name), 1000);
    })
  }
}
