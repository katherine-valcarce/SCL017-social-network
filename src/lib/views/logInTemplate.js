import { welcomeTemplate } from './welcomeTemplate.js';

export const loginTemplate = () => {
  let loginHTML = welcomeTemplate();
  loginHTML += `
    <div id="login" class="loginModal">
        <div class= "loginForm">
            <h1> ¡HOLA! </h1>
            <h2> Estábamos esperándote </h2>
            <form>
                <input type= 'text' id= "user" class="inputForm" placeholder= "Usuario"> <br>
                <input type= 'password' id= "pass" class="inputForm" placeholder="Contraseña"> <br>
                <button type="submit" class="loginButton">Ingresar</button>              
            </form>
            <p class="option"> o <p>
            <button id="googleLoginButton" class="googleLoginButton" >Ingresa con Google</button>
            <div> 
              <a href='' class='closeLoginModal'>Cerrar</a>
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
