import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// const range$ = range(1,5).pipe(
//     map<number,number>(val=> val * 10)
// ).subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.subscribe(console.log)

const keyupMap$ = keyup$.pipe(map(event => event.code))
    .subscribe(val => console.log(val));


const keyupPluck$ = keyup$.pipe(pluck('target', 'baseURI'))
    .subscribe(val => console.log(val));


const keyupMapTo$ = keyup$.pipe(mapTo('tecla precionada'))
    .subscribe(val => console.log(val));

