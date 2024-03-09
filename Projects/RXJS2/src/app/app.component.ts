import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  _mySubscription: Subscription | null = null;

  ngOnDestroy(): void {
    this._mySubscription?.unsubscribe();
  }
  ngOnInit(): void {

    //Generating a runtime error
    // this.myPromise('Andre').then((res) => console.log(res));

    //return a promise without an error
    // this.myPromise('Jose').then((res) => console.log(res));

    //subscribe the myObservable function
    // this._mySubscription = this.myObservable('Andre').subscribe((res) => console.log(res));

    //Use the constructObserver
    // let obs = this.myObservable('Andre');
    // this._mySubscription = obs.subscribe(this.constructObserver());
    // this._mySubscription.add(() => console.log('complete'));
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

  constructObserver() : Observer<string> {
    return {
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    }
  }
}
