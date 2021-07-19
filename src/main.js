/* import { welcomeTemplate } from './lib/views/welcomeTemplate.js'; */
import { displayRespectiveTemplate } from './lib/router.js';

const init = () => {
  displayRespectiveTemplate(window.location.hash);
  window.addEventListener('hashchange', () => {
    displayRespectiveTemplate(window.location.hash);
  });
};

window.addEventListener('load', init);
