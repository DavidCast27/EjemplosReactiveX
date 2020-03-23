import { of, Observer } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbinx.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5'

const manejaError = (resp: AjaxError) => {
    console.warn('Error', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
}

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error en sub : ', error),
    complete: () => console.info('completado ')
};


// const obs$ = ajax.getJSON(url).pipe(catchError(manejaError));
// const obs2$ = ajax(url).pipe(catchError(manejaError));

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$
.pipe(catchError(manejaError)).subscribe(observer);
// obs2$.subscribe(data => console.log('ajax', data));


