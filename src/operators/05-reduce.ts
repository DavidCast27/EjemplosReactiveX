import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

// reduce en javascript

const numbers = [1, 2, 3, 4, 5, 6];

const total = (acumulador: number, actual: number) => acumulador + actual;

const totalReduce = numbers.reduce(total, 1);
console.log('totalArreglo', totalReduce);


// rxjs

interval(1000)
    .pipe(
        take(3),
        tap(console.log),
        reduce(total)
    )
    .subscribe({
        next: val => console.log(val),
        complete: () => console.log('complete')
    })