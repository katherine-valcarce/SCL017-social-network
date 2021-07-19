import { headerTemplate } from './headerTemplate.js';

export const registerTemplate = () => {
  let registerHTML = headerTemplate();
  registerHTML += `
    <div class="mainSingIn">
      <text class= "tittleSingIn">
        Regístrate para ingresar <br> a nuestra comunidad
      </text>
      <div class= "singInForm">
          <h1> Nos alegra que quieras <br> crear junto a nosotros</h1>
          <h2> Tenemos muchos proyectos <br> que te pueden gustar</h2>
            <form id="registerForm">
                <input type="text" id="registerEmail" placeholder="Correo electrónico" class="Form" />
                <input type="password" id="registerPassword" placeholder="Ingresa una contraseña" class="Form" />
                <button type="submit" class="createAccountBtn" >Crear cuenta</button> 
            </form>
            <br><center> ó </center><br>  
            <button id="googleLogin" class="googleLoginBtn2">Crear cuenta con Google</button>
      </div>
    </div>`;
 registerHTML += `
    <footer>
      <text class="textFooterHash">
        #IDidIt
      </text>
      <text class= "textFooter">
        Sigue a nuestra comunidad en Instagram y sube tus proyectos y avances
      </text>
    </footer>
    `;
  return registerHTML;
};
