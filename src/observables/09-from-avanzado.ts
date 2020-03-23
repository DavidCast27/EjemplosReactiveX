import { Observer, from, of } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

/**
 * of = toma argumentos y genera una secuencia;
 * from = array, primise, iterable, observable
 *
 */


const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')
}



//const of$ = of(...[1,2,3,4,5]);
// of$.subscribe(observer);
// const of$ = of([1,2,3,4,5]);
// of$.subscribe(observer);


// const from$ = from([1,2,3,4,5]);
// from$.subscribe(observer);

// const from$ = from('David')
// from$.subscribe(observer);

// const from$ = from(fetch('https://api.github.com/users/DavidCast27'));
// from$.subscribe(async(resp)=>{
//     console.log(resp);
//     const data = await resp.json();
//     console.log(data);
// });

const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

}

const miIterable = miGenerador();

// for (const id of miIterable) {
//     console.log(id);
// }

from(miIterable).subscribe(observer);




