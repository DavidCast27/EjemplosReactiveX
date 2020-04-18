import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

//helper
const url = 'https://reqres.in/api/login?delay=1'
const peticionHTTPLogin = (userPass) => ajax.post(url,userPass)
.pipe(
    pluck('response','token'),
    catchError(err=> of('xxxx'))
    )



//HTML crear formulario

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

//html config
inputEmail.type = 'email';
inputEmail.placeholder = "Email";
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = "Password";
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

//Streams

const submitForm$ = fromEvent(form, 'submit');

submitForm$.pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    // mergeMap(peticionHTTPLogin) // se ejecutan todas las peticiones ajax (observable) en simultaneo
    // switchMap(peticionHTTPLogin) // cancela la peticion vieja y deja activa la acutal
    exhaustMap(peticionHTTPLogin) // ignora las peticiones despues de la primera hasta que el observable se termine
    // mergeMap(userPass => peticionHTTPLogin(userPass))

).subscribe(token => console.log(token))
