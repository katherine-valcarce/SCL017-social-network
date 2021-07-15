import { header } from './headerTemplate.js';

export const logIn = () => {
  let logInView = header();
  logInView += `
      <h3>
        Inicia Sesión
      </h3>
    `;

  return logInView;
};
