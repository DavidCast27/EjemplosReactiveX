import { interval, from } from 'rxjs';
import { take, scan, tap, reduce, map } from 'rxjs/operators';


const numbers = [1, 2, 3, 4, 5, 6];

const totalAcumulador = (acumulador: number, actual: number) => acumulador + actual;

from(numbers)
    .pipe(
        reduce(totalAcumulador, 0),
    )
    .subscribe(console.log)

from(numbers)
    .pipe(
        scan(totalAcumulador, 0),
    )
    .subscribe(console.log)

// Redux

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number
}
const user: Usuario[] = [
    { id: 'dcastril', autenticado: false, token: null },
    { id: 'dcastril', autenticado: true, token: 'ABC' },
    { id: 'dcastril', autenticado: true, token: '123' },
];

const state$ = from(user)
    .pipe(
        scan<Usuario>((acc, cur) => {
            return { ...acc, ...cur }
        }, { edad: 33 })
    );


const id$ = state$.pipe(
    map(state => state.id)
)

id$.subscribe(console.log);
