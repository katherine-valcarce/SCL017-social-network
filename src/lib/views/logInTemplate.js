import { header } from './headerTemplate.js';
import { navBar } from './navBarTemplate.js';

export const logIn = () => {
  let logInView = header();
  logInView += navBar();
  logInView += `
      <h3>
        Inicia Sesión
      </h3>
    `;

  return logInView;
};
