import { filter, from, map } from "rxjs";

export class Operators {
    numbers = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    filterByEvenNumbers() {
        this.numbers.pipe(filter(f => f % 2 === 0)).subscribe(console.log);
    }

    powBy2Numbers() {
        this.numbers.pipe(map(m => m * 2)).subscribe(console.log);
    }
}