import { interval, Observer, timer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')
}

const interval$ = interval(1000);

// console.log('inicio');
// interval$.subscribe(observer);
// console.log('fin');

// const timer$ = timer(2000)
// console.log('inicio');
//  timer$.subscribe(observer);
// console.log('fin');


// const timer2$ = timer(2000, 1000)
// console.log('inicio');
//  timer2$.subscribe(observer);
// console.log('fin');


const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const timer3$ = timer(hoyEn5)
console.log('inicio');
timer3$.subscribe(observer);
console.log('fin');