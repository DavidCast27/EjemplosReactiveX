import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'X' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
    { nombre: 'Megaman' },
    { nombre: 'megaman' },
]

from(personajes).pipe(distinctUntilKeyChanged('nombre'))
    .subscribe(console.log);
