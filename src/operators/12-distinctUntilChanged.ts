import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';


const numeros$ = of(1, 2, 3, 3, 1, 2, 4, 5, 1, 2, 4, 5, 6, 7);

numeros$
    .pipe(
        distinctUntilChanged()
    )
    .subscribe(console.log)

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {nombre: 'Megaman'},
    {nombre: 'X'},
    {nombre: 'Zero'},
    {nombre: 'Megaman'},
    {nombre: 'Megaman'},
    {nombre: 'Zero'},
    {nombre: 'Megaman'},
    {nombre: 'megaman'},
]

from(personajes).pipe( distinctUntilChanged((ant,act)=> ant.nombre === act.nombre))
.subscribe(console.log);
