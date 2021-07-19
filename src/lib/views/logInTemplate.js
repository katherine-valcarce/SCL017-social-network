import { headerTemplate } from './headerTemplate.js';

export const loginTemplate = () => {
  let loginHTML = headerTemplate();
  loginHTML += `
      <button id="googleLogin">Inicia Sesión con Google</button>
    `;
  return loginHTML;
};

/* const googleLoginButton = logInView.querySelector('#googleLogin');
googleLoginButton.addEventListener('click', () => {
  login();
}); */
