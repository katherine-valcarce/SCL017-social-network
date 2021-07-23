import { welcomeTemplate } from './welcomeTemplate.js';

export const registerTemplate = () => {
  let registerHTML = welcomeTemplate();
  registerHTML += `
    <div id="register" class="loginModalRegister">
      <div class= "registerForm">
          <h1 class="h1Register"> Nos alegra que quieras <br> crear junto a nosotros</h1>
            <text class= "registerTitle">
              Regístrate
            </text>
          <h2 class="h2Register"> Tenemos muchos proyectos <br> que te pueden gustar</h2>
                <form id="registerForm" class= "inputRegisterForm">
                    <input type="text" id="registerEmail" class="inputForm" placeholder="Correo electrónico" required/>
                    <input type="password" id="registerPassword" class="inputForm" placeholder="Ingresa una contraseña" required/>
                    <button type="submit" class="createAccountButton" >Crear cuenta</button> 
                </form>
                <p class="option"> o <p>  
                <button id="googleRegisterButton" class="googleRegisterButton">Crear cuenta con Google</button>
                <a href='' class='closeRegisterModal'>Cerrar</a>
           </div>
      </div>
    </div>
  `;

  registerHTML += `
    <footer>
      <text class="doitHash">
        #IDidIt
      </text>
      <text class= "textFooter">
        Sigue a nuestra comunidad en Instagram y sube tus proyectos y avances
      </text>
    </footer>
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
