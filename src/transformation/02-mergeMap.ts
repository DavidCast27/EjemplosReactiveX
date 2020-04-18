import { of, Observer, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, mergeMapTo, takeUntil } from 'rxjs/operators';


const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error : ', error),
    complete: () => console.info('completado ')
};
const letras$ = of('a', 'b', 'c');


letras$
    .pipe(
        mergeMap((letra) => interval(1000)
            .pipe(
                map(i => letra + i),
                take(3)
            ))
    )
    // .subscribe(observer);

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$
.pipe(
    mergeMap(()=> interval$.pipe(
        takeUntil(mouseup$)
    ))
)
.subscribe(console.log)