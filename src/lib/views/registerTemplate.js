import { headerTemplate } from './headerTemplate.js';

export const registerTemplate = () => {
  let registerHTML = headerTemplate();
  registerHTML += `
    <main class="registerMain">
      <text class= "registerTitle">
        Regístrate para ingresar <br> a nuestra comunidad
      </text>
      <div class= "registerForm">
          <h1> Nos alegra que quieras <br> crear junto a nosotros</h1>
          <h2> Tenemos muchos proyectos <br> que te pueden gustar</h2>
            <form id="registerForm">
                <input type="text" id="registerEmail" class="inputForm" placeholder="Correo electrónico"/>
                <input type="password" id="registerPassword" class="inputForm" placeholder="Ingresa una contraseña"/>
                <button type="submit" class="createAccountButton" >Crear cuenta</button> 
            </form>
            <br><center> ó </center><br>  
            <button id="googleRegisterButton" class="googleRegisterButton">Crear cuenta con Google</button>
      </div>
    </main>`;
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
