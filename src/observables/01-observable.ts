import { Observable, Subscriber, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')
}

//const obs$ = Observable.create();

const obs$ = new Observable<string>(subs => {

    subs.next('Hola');
    subs.next('Mundo');

    // const a = undefined;
    // a.nombre = 'David';

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');

});
//obs$.subscribe(resp => console.log (resp));
//obs$.subscribe(console.log);

// obs$.subscribe(
//     valor => console.log('next: ' + valor),
//     error => console.warn('error: ' + error),
//     () => console.info('completado')  
// )

obs$.subscribe(observer)


