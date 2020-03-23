import { of, range, asyncScheduler } from 'rxjs';

// const of$ = of(1,2,3,4,5);
// console.log('inicio');
// of$.subscribe(console.log);
// console.log('fin');

const range$ = range(10, 5);
console.log('inicio');
range$.subscribe(console.log);
console.log('fin');

const asyncRange$ = range(10, 5, asyncScheduler);
console.log('inicio');
asyncRange$.subscribe(console.log);
console.log('fin');