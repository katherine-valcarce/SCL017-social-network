import { welcomeTemplate } from './welcomeTemplate.js';

export const loginTemplate = () => {
  let loginHTML = welcomeTemplate();
  loginHTML += `
    <div id="login" class="loginModal">
        <div class= "loginForm">
            <h1> ¡HOLA! </h1>
            <h2> Estábamos esperándote </h2>
            <form id="logInForm">
                <input type= 'text' id= "user" class="inputForm" placeholder= "Usuario" required> <br>
                <input type= 'password' id= "pass" class="inputForm" placeholder="Contraseña" required> <br>
                <button type="submit" class="loginButton" id="loginButton">Ingresar</button>              
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
