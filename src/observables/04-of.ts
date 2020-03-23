import { of, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error : ', error),
    complete: () => console.info('completado ')
};

//const obs$ = of(1,2,3,4,5,6,7);
// const obs$ = of(...[1,2,3,4,5,6,7],10,11,12);
const obs$ = of<any>([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));



console.log('inicio');
obs$.subscribe(observer);
console.log('fin');