import { registration } from './view/templateRegistro.js';
//import { login } from './view/templateInicioSesion.js';
import { welcome } from './view/templateWelcome.js';

/*export const changeRoute = (hash) => {
        if (hash === '#/'){
             return showTemplate(hash)
        } else if ( hash === '#/Registro'){
              return showTemplate(hash)
        } else {
              return showTemplate(hash)
        }
}*/

export const showTemplate = (hash) => {
     let containerRoot = document.getElementById('root');

    switch (hash) {
        case '':
            containerRoot.appendChild(welcome());
         break;
        case '#/Registro':
            containerRoot.appendChild(registration());
         break;
        default:
            containerRoot.innerHTML= `<h2>No existe la página</h2>`
    }
}