import { welcomeTemplate } from './welcomeTemplate.js';

export const loginTemplate = () => {
  let loginHTML = welcomeTemplate();
  loginHTML += `
    <div id="login" class="loginModal">
        <div class= "loginForm">
            <h1> ¡HOLA! </h1>
            <div class = "textLoginForm"> Estábamos esperándote </div>
            <form id="logInForm">
                <input type= 'text' id= "user" class="inputForm" placeholder= "Correo Electronico" required> <br>
                <input type= 'password' id= "pass" class="inputForm" placeholder="Contraseña" required> <br>
                <button type="submit" class="loginButton" id="loginButton">Ingresar</button>              
            </form>
            <div> 
              <p class="option"> o </p>
              <button id="googleLoginButton" class="googleLoginButton" >Ingresa con Google</button>
            </div>
            <div class ="closeLoginModalDiv"> 
              <a href='' class='closeLoginModal'>Cerrar</a>
            </div>
        </div>
    </div>
    
  `;
  return loginHTML;
};
