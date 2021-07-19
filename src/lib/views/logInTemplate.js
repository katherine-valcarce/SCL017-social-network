import { welcomeTemplate } from './welcomeTemplate.js';

export const loginTemplate = () => {
  let loginHTML = welcomeTemplate();
  loginHTML += `
    <div id="logIn" class="modal">
      <div class= "LogInForm">
        <h1> ¡HOLA! </h1>
        <h2> Estábamos esperándote </h2>
        <form>
            <input type= 'text' name= 'usuario' id= "user" class="Form" placeholder= "Usuario"> <br>
            <input type= 'password' name= 'pass' id= "pass" class="Form" placeholder="Contraseña"> <br>
            <input type="submit" class="logInBtn" value="Ingresar">
          <br><center> ó </center><br>  
        </form>
        <button id="googleLogin" class="googleLoginBtn" >Inicia sesión con Google</button>
      <div class= "closeModal"> 
        <a href='' class='close-modal'>Cerrar</a>
      </div>
      </div>
    </div>
  `;
  return loginHTML;
};

/* const googleLoginButton = logInView.querySelector('#googleLogin');
googleLoginButton.addEventListener('click', () => {
  login();
}); */
