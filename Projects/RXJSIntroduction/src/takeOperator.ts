import { of, take } from "rxjs";

export class TakeOperator {
    takeTheThreeFirstNumbers() {
        of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
        .pipe(
            take(3)
        )
        .subscribe(console.log);
    }
}