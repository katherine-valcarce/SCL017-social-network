import { headerTemplate } from './headerTemplate.js';

export const registerTemplate = () => {
  let registerHTML = headerTemplate();
  registerHTML += `
      <main>
          <h1>Regístrate para ingresar a nuestra comunidad</h1>
          <form id="registerForm">
              <h2>Nos Alegra que quieras crear junto a nosotros</h2>
              <h3>Tenemos muchos proyectos que te pueden gustar</h3>
              <input type="text" id="registerEmail" placeholder="Correo electrónico" />
              <input type="password" id="registerPassword" placeholder="Ingresa una contraseña" />
              <button type="submit">Crear cuenta</button>
              <h3>o</h3>
              <button>registrarte con google</button>
          </form>
      </main>
    `;

  return registerHTML;
};
