import { interval, fromEvent, Observer } from 'rxjs';
import { takeUntil, tap, skip } from 'rxjs/operators';


const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error : ', error),
    complete: () => console.info('completado ')
};
const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton)


const counter$ = interval(1000);

// const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click')
.pipe(
    tap(()=> console.log('antes')),
    skip(1),
    tap(()=> console.log('despues'))
    );

counter$
.pipe(
    takeUntil(clickBtn$)
)
.subscribe(observer);