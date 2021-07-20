/* eslint-disable no-use-before-define */
/* eslint-disable no-else-return */

import { googleRegister, register, authObserver } from './index.js';
import { welcomeTemplate } from './views/welcomeTemplate.js';
import { aboutUsTemplate } from './views/aboutUsTemplate.js';
import { registerTemplate } from './views/registerTemplate.js';
import { loginTemplate } from './views/loginTemplate.js';

export const displayRespectiveTemplate = (hash) => {
  const containerRoot = document.getElementById('root');

  switch (hash) {
    case '':
      containerRoot.innerHTML = welcomeTemplate();
      break;
    case '#/aboutUs':
      containerRoot.innerHTML = aboutUsTemplate();
      break;
    case '#/register':
      containerRoot.innerHTML = registerTemplate();
      register();
      googleRegister();
      authObserver();
      break;
    case '#/login':
      containerRoot.innerHTML = loginTemplate();
      break;
    default:
      containerRoot.innerHTML = `
      <h1> no existe</h1>
      `;
  }
};
