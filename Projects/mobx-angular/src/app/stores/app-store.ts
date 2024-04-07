import { Injectable } from "@angular/core";
import { action, observable } from "mobx-angular";

@Injectable()
export class AppStore {
    @observable count = 0;

    @action increment() {
        this.count++;
    }

    @action decrement() {
        this.count--;
    }
}