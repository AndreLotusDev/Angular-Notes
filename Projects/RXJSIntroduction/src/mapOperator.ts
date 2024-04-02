import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export class MapOperator {
    getPowFromSourceNumbers() {
        of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
        .pipe(
            map(num => num * 2)
        )
        .subscribe(console.log);
    }
}