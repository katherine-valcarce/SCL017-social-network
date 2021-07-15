import { header } from './headerTemplate.js';

export const logIn = () => {
  let logInView = header();
  logInView += `
      <button id="googleLogin">Inicia Sesión con Google</button>
    `;
  return logInView;
};

/* const googleLoginButton = logInView.querySelector('#googleLogin');
googleLoginButton.addEventListener('click', () => {
  login();
}); */
