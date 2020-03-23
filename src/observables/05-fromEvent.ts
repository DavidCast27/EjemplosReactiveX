import { fromEvent, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error : ', error),
    complete: () => console.info('completado ')
};

/**
 * Eventos del DOM
 */
const fEvenClick$ = fromEvent<MouseEvent>(document, 'click');
const fEvenkeyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

fEvenClick$.subscribe(({ x, y }) => {
    console.log(x, y)
});

fEvenkeyUp$.subscribe(event => {
    console.log(event.key);
});

