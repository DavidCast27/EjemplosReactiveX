import { fromEvent } from 'rxjs';
import { debounceTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';


// cuantas milesimas de segundo despues de la ultima emision
const click$ = fromEvent(document, 'click');

click$
    .pipe(
        debounceTime(3000)
    )
// .subscribe(console.log);

//ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup')
    .pipe(
        debounceTime(1000),
        pluck('target', 'value'),
        distinctUntilChanged()
    );
input$.subscribe(console.log)