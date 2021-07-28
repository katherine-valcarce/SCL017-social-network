/* eslint-disable no-use-before-define */
/* eslint-disable no-else-return */

// eslint-disable-next-line import/no-cycle
import {
  // eslint-disable-next-line import/named
  googleRegister, register, authObserver, menuMobile, logIn, googleLogIn, createPost, showPost,
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
        } else {
          containerRoot.innerHTML = welcomeTemplate();
        }
      });
      createPost();
      authObserver();
      showPost();
      break;
    default:
      containerRoot.innerHTML = `
      <h1> no existe</h1>
      `;
  }
};
