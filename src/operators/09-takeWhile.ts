import { fromEvent, Observer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document,'click');

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error : ', error),
    complete: () => console.info('completado ')
};

click$
.pipe(
    map(({x,y})=> ({x,y})),
    // takeWhile( ({y})=> y <= 150 ),
    takeWhile( ({y})=> y <= 150 , true)
)
.subscribe(observer);