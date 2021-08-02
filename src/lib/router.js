/* eslint-disable no-use-before-define */
/* eslint-disable no-else-return */

// eslint-disable-next-line import/no-cycle
import {
  // eslint-disable-next-line import/named
  // eslint-disable-next-line max-len
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line max-len
  googleRegister, register, authObserver, menuMobile, logIn, googleLogIn, getPostFirebase, post,
// eslint-disable-next-line import/named
} from './index.js';
import { welcomeTemplate } from './views/welcomeTemplate.js';
import { aboutUsTemplate } from './views/aboutUsTemplate.js';
import { registerTemplate } from './views/registerTemplate.js';
import { loginTemplate } from './views/logInTemplate.js';
import { feedTemplate } from './views/principalFeedTemplate.js';

export const displayRespectiveTemplate = (hash) => {
  const containerRoot = document.getElementById('root');

  switch (hash) {
    case '':
      containerRoot.innerHTML = welcomeTemplate();
      menuMobile();
      break;
    case '#/aboutUs':
      containerRoot.innerHTML = aboutUsTemplate();
      menuMobile();
      break;
    case '#/register':
      containerRoot.innerHTML = registerTemplate();
      register();
      googleRegister();
      break;
    case '#/login':
      containerRoot.innerHTML = loginTemplate();
      logIn();
      authObserver();
      googleLogIn();
      break;
    case '#/feed':
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          containerRoot.innerHTML = feedTemplate();
          authObserver();
          getPostFirebase();
          post();
        } else {
          containerRoot.innerHTML = welcomeTemplate();
        }
      });
      break;
    default:
      containerRoot.innerHTML = `
      <h1> no existe</h1>
      `;
  }
};
