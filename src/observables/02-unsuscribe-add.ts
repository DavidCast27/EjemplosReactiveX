import { Observable, Subscriber, Observer, Subscription } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error : ', error),
    complete: () => console.info('completado ')
};

const intervalo$ = new Observable<number>(subscriber => {
    //crear un contador
    let contador = 0;
    const intervalor = setInterval(() => {
        contador++;
        subscriber.next(contador);
        console.log(contador);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(intervalor);
        console.log('intervalor terminado');
    }
});

// const subcription1: Subscription = intervalo$.subscribe(num =>{console.log('Num: ', num);});
// const subcription2: Subscription = intervalo$.subscribe(num =>{console.log('Num: ', num);});
// const subcription3: Subscription = intervalo$.subscribe(num =>{console.log('Num: ', num);});

const subcription1: Subscription = intervalo$.subscribe(observer);
const subcription2: Subscription = intervalo$.subscribe(observer);
const subcription3: Subscription = intervalo$.subscribe(observer);


subcription1.add(subcription2).add(subcription3);

setTimeout(() => {
    subcription1.unsubscribe();
    // subcription2.unsubscribe();
    // subcription3.unsubscribe();
    console.log('terminado timeout')
}, 5000)