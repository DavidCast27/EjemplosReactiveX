import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';


const numeros$ = of(1, 2, 3, 4);
const interval$ = interval(500).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

forkJoin(
    numeros$,
    interval$,
    letras$
).subscribe(console.log)

forkJoin(
    numeros$,
    interval$,
    letras$
).subscribe(resp => {
    console.log('numeros', resp[0]);
    console.log('interval', resp[1]);
    console.log('letras', resp[2]);
})

forkJoin({
    numeros$,
    interval$,
    letras$
}).subscribe(console.log)

forkJoin({
    num: numeros$,
    int: interval$,
    let: letras$
}).subscribe(console.log)