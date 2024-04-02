export class FilterOperator {
    getOddNumbersFromSource() {
        of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
        .pipe(
            filter(num => num % 2 !== 0)
        )
        .subscribe(console.log);
    }
}