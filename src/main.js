// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { welcome } from './lib/views/welcomeTemplate.js';
import { changeTemplate } from './lib/router.js';

/*  */

const init = () => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = welcome();
  window.addEventListener('hashchange', () => {
    myFunction();
    console.log(window.location.hash);
    changeTemplate(window.location.hash);
  });
};

window.addEventListener('load', init());
