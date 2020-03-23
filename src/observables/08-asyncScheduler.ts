import { asyncScheduler } from 'rxjs'

// setTimeout(()=>{},3000)
// setInterval(()=>{},3000)

const saludar = () => console.log('hola mundo');
const saludar2 = (nombre) => console.log(`hola mundo ${nombre}`);


// asyncScheduler.schedule(saludar,2000);
// asyncScheduler.schedule(saludar2,2000, 'David');


/**
 * para simular un interval no puede ser una lamda function
 */
const subs = asyncScheduler.schedule(function (state) {
    console.log('state: ', state);
    this.schedule(state + 1, 1000);
}, 1000, 0)

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);