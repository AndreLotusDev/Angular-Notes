import { fromEvent, interval, switchMap } from "rxjs";

export class SwitchMap {

    execute() {
        fromEvent(document, 'click')
        .pipe(
            switchMap(() => interval(1000))
        )
        .subscribe(e => console.log(e));
    }
}