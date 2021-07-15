import { header } from './headerTemplate.js';

export const signIn = () => {
  let signInView = header();
  signInView += `
      <h3>
        Regístrate
      </h3>
    `;

  return signInView;
};
