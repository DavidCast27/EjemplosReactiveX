import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';


// cuantas milesimas de segundo despues de la ultima emision
const click$ = fromEvent(document, 'click');

click$
    .pipe(
        throttleTime(3000)
    )
    .subscribe(console.log);

//ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup')


    .pipe(
        throttleTime(1000,asyncScheduler,{
            leading: true,
            trailing:true
        }),
        pluck('target', 'value'),
        distinctUntilChanged()
    );
input$.subscribe(console.log)