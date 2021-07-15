import { welcome } from './lib/views/welcomeTemplate.js';
import { changeTemplate } from './lib/router.js';

const init = () => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = welcome();
  window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
    changeTemplate(window.location.hash);
  });
};

window.addEventListener('load', init());
