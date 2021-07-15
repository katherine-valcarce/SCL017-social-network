// Este es el punto de entrada de tu aplicacion
import { welcome } from './lib/view/templateWelcome.js';
import { myFunction } from './lib/index.js';
import {changeRoute} from './lib/router.js';


const init = () => {
    document.getElementById('root').appendChild(welcome());
        window.addEventListener('hashChange', () => {
         myFunction();
         console.log(window.location.hash);
         changeRoute(window.location.hash)
         })
}
window.addEventListener('load', init)