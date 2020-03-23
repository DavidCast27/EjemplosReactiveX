import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.put(url, {
    id:1,
    nombre: 'David'
}, {
    'mi-token': 'asas'
}).subscribe(console.log);


ajax ({
    url,
    method: 'POST',
    headers:{
        'mi-toke': 'asasa'
    },
    body:{
        id:1,
        nombre:'David'
    }
}).subscribe(console.log);