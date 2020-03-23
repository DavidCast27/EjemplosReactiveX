import { Observable, Subscriber, Observer, Subscription, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error : ', error),
    complete: () => console.info('completado ')
};

const intervalo$: Observable<number> = new Observable(subs => {

    const intervalID = setInterval(() => subs.next(Math.random()), 1000);
    return () => {
        clearInterval(intervalID);
        console.log('intervalo destruido');
    }
})

/**
 * 1- casteo multiple
 * 2- es un obeserver
 * 3- next error y complite
 */
const subject$ = new Subject()
const intervarSubject = intervalo$.subscribe(subject$);

// const sub1 = intervalo$.subscribe(random => console.log ('sub 1', random));
// const sub2 = intervalo$.subscribe(random => console.log ('sub 2', random));

const sub1 = subject$.subscribe(observer);
const sub2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();

    intervarSubject.unsubscribe();
}, 3500)