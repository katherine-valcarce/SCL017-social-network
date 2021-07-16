// Este es el punto de entrada de tu aplicacion
import { welcome } from './lib/view/templateWelcome.js';
//import { myFunction } from './lib/index.js';
import { showTemplate } from './lib/router.js';


const init = () => {
  let containerRoot = document.getElementById('root');
  containerRoot.appendChild(welcome());
  window.addEventListener('hashchange', () => {
        console.log(window.location.hash);
        showTemplate(window.location.hash);
      });
    };
    
    window.addEventListener('load', init());