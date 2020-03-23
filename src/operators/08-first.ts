import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        tap(console.log),
        // map<MouseEvent,any>( event => ({
        //     clientX: event.clientX,
        //     clientY: event.clientY
        // }))
        map(({ clientX, clientY }) => ({ clientX, clientY })),
        first(event => event.clientX >= 300)
    )
    .subscribe({
        next: value => console.log('next: ', value),
        error: error => console.warn('error : ', error),
        complete: () => console.info('completado ')
    })