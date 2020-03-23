import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// const range$ = range(1,10).pipe(
//     filter(val => val % 2 ===1)
// ).subscribe(console.log)

// const range$ = range(20,30).pipe(
//     filter((val, index) => {
//         console.log(index);
//         return val % 2 ===1
//     })
// ).subscribe(console.log)
interface Personaje {
    tipo: string,
    nombre: string
}
const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
]

// const buscarPorTipo = tipo => {
//     from(personajes).pipe( filter(val=> val.tipo === tipo)).subscribe(console.log);
// }
// buscarPorTipo('heroe');


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map(event => event.code),
        filter(code => code === 'Enter')
    )
    .subscribe(console.log);


