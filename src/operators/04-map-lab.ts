import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const texto = document.createElement('div');


texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis nibh vitae scelerisque ornare. Pellentesque pulvinar enim ut egestas faucibus. Sed tristique magna nisi, et imperdiet purus interdum id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tempor mattis nulla non vulputate. Vestibulum varius facilisis lobortis. In vehicula gravida enim a vehicula. Nam eget tincidunt massa. Nullam et tellus quis risus auctor imperdiet ac ac risus.
<br/><br/>
Nam porta, nisl vitae tincidunt pretium, odio justo pharetra felis, vel venenatis lorem orci non odio. Pellentesque id eros quis mauris viverra convallis et quis dui. Nulla facilisi. Integer ex ex, blandit eget risus ac, convallis porta quam. Nam sed rhoncus libero. Ut ac gravida sem. Integer dictum posuere leo sed venenatis. Phasellus maximus luctus urna, vel fermentum diam placerat at. Mauris ante dui, suscipit sit amet tellus in, sollicitudin venenatis libero. Donec ut nisl eu leo porta fringilla.
<br/><br/>
Phasellus sit amet fermentum nisi, sit amet facilisis justo. Nunc lacus elit, ultricies sit amet condimentum eu, auctor eget lorem. Sed pharetra ipsum a tortor ultrices, id dignissim odio tempor. Pellentesque auctor et quam vitae suscipit. Aenean justo quam, volutpat vitae risus id, mollis bibendum neque. Vestibulum in ex leo. In magna erat, venenatis vel odio nec, posuere accumsan nunc. Phasellus molestie sem mauris, ac dapibus metus semper sed. Donec condimentum, elit vitae feugiat gravida, ligula orci lobortis sapien, in pulvinar neque ante eget mi. Sed sed dolor non dui laoreet interdum vitae ac sem. Duis eleifend, tortor ut suscipit rhoncus, augue lacus lobortis nisl, eu tempus nunc quam sed est. Vestibulum interdum egestas gravida. Duis cursus enim at orci ornare sagittis.
<br/><br/>
Fusce ornare libero efficitur augue lobortis viverra vitae id mauris. Nam tempor turpis vel libero porttitor feugiat. Quisque egestas lorem a vehicula aliquet. Nullam ipsum ipsum, ullamcorper pharetra lectus a, facilisis lobortis justo. Duis velit lacus, eleifend ut nulla a, pharetra feugiat libero. Pellentesque a ipsum eu leo gravida hendrerit ullamcorper non lorem. Curabitur congue ipsum neque, vitae auctor leo facilisis ut. Curabitur est orci, pulvinar a sapien semper, rutrum facilisis felis. Sed arcu turpis, auctor nec euismod nec, lacinia ac dolor. Sed eget gravida metus, sed interdum dui. Nullam pretium arcu neque, sit amet pharetra tellus lacinia aliquet.
<br/><br/>
Mauris sem leo, blandit ut est at, hendrerit aliquet neque. Nulla facilisi. Praesent condimentum odio ut arcu posuere tristique. Praesent interdum tincidunt leo, tincidunt euismod mauris viverra nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nisl tortor, venenatis et consequat ut, mattis quis est. Donec consectetur elit a lorem rutrum, id pellentesque arcu tincidunt. Morbi auctor orci sit amet velit faucibus malesuada. Curabitur ultricies, lectus pretium mollis imperdiet, magna libero euismod odio, id ullamcorper lorem est sed justo. Maecenas et nibh tincidunt, bibendum turpis sed, laoreet nulla. Ut eget mi dolor. Aliquam sed facilisis dolor.
`
const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion  para hacer el calculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// streams
const scroll$ = fromEvent(document, 'scroll');
scroll$.subscribe(console.log);

const progress$ = scroll$
    .pipe(
        // map(event => calcularPorcentajeScroll(event))
        map(calcularPorcentajeScroll),
        tap(console.log)
    )
    .subscribe(porcentaje => {
        progressBar.style.width = `${porcentaje}%`;
    });


