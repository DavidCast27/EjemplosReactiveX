import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';


const numeros$ = of(1, 2, 3, 4, 5);
numeros$
    .pipe(
        tap(t => console.log('tap', t)),
        take(4)
    )
    .subscribe({
        next: value => console.log('next: ', value),
        error: error => console.warn('error : ', error),
        complete: () => console.info('completado ')
    })
