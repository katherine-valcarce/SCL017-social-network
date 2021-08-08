import { welcomeTemplate } from './welcomeTemplate.js';

export const registerTemplate = () => {
  let registerHTML = welcomeTemplate();
  registerHTML += `
    <div id="register" class="loginModalRegister">
      <div class= "registerForm">
          <div class="h1Register"> Nos alegra que quieras crear <br> junto a nosotros</div>
            <h1 class= "registerTitle">
              ¡Regístrate!
            </h1>
          <div class="h2Register"> Tenemos muchos proyectos  que te <br> gustarán</div>
                <form id="registerForm" class= "inputRegisterForm">
                    <input type="text" id="registerEmail" class="inputForm" placeholder="Correo electrónico" required/>
                    <input type="password" id="registerPassword" class="inputForm" placeholder="Ingresa una contraseña" required/>
                    <button type="submit" class="createAccountButton" >Crear cuenta</button> 
                </form>
                <p class="option"> o </p>  
                <button id="googleLoginButton" class="googleRegisterButton">Ingresa con Google</button>
                <div class = "closeRegister">
                <a href='' class='closeRegisterModal'>Cerrar</a>
                </div>
           </div>
      </div>
    </div>
  `;
  return registerHTML;
};
export const verificationTemplate = () => {
  let verifiedHTML = welcomeTemplate();
  verifiedHTML += `
  <div id="register" class="loginModalRegister">
      <div class= "registerForm">
        <div class="verificationContainer">
          <text class="verificationText"> Se envió un correo de verificación a tu Email. <br>
          Confirma tu cuenta y podrás iniciar sesión en DoIt</text> <br>
          <button class="btnLoginFromRegister"><a class="abtnLoginFromRegister" href="#/login"> Iniciar sesión </a></button>
        </div>
      </div>  
  </div>
  `;

  return verifiedHTML;
};
