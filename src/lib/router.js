/* eslint-disable spaced-comment */
import { login } from './index.js';
import { welcome } from './views/welcomeTemplate.js';
import { aboutUs } from './views/aboutUsTemplate.js';
import { signIn } from './views/singInTemplate.js';
import { logIn } from './views/logInTemplate.js';

export const changeTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  let googleLoginButton = '';

  switch (hash) {
    case '':
      containerRoot.innerHTML = welcome();
      break;
    case '#/aboutUs':
      containerRoot.innerHTML = aboutUs();
      break;
    case '#/signIn':
      containerRoot.innerHTML = signIn();
      break;
    case '#/logIn':
      containerRoot.innerHTML = logIn();
      googleLoginButton = containerRoot.querySelector('#googleLogin');
      googleLoginButton.addEventListener('click', () => {
        login();
      });
      break;
    default:
      containerRoot.innerHTML = `
      <h1> no existe</h1>
      `;
  }
};

/*necesito preguntar por utilidad de la función que está a continuación,
pues no cumple con la función de cambiar la ruta
(eso lo hace el atributo href que le doy a la etiqueta <a>).
De hecho, la función toma cualquiera sea el hash que tenga el href
y lo manda a la funcion showTemplate que es la cambia la vista que se despliega*/

/*export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  // eslint-disable-next-line no-else-return
  } else if (hash === '#/aboutUs') {
    return showTemplate(hash);
  } else {
    return showTemplate(hash);
  }
}; */
