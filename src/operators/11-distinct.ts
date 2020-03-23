import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';


const numeros$ = of(1, 2, 3, 3, 1, 2, 4, 5, 1, 2, 4, 5, 6, 7);

numeros$
    .pipe(
        distinct()
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
    {nombre: 'Zero'},
    {nombre: 'Megaman'},
    {nombre: 'megaman'},
]

from(personajes).pipe( distinct(p => p.nombre.toUpperCase())).subscribe(console.log);
