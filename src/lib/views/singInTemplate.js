import { header } from './headerTemplate.js';
import { navBar } from './navBarTemplate.js';

export const signIn = () => {
  let signInView = header();
  signInView += navBar();
  signInView += `
      <h3>
        Regístrate
      </h3>
    `;

  return signInView;
};
