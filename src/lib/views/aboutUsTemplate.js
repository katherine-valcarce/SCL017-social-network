import { headerTemplate } from './headerTemplate.js';

export const aboutUsTemplate = () => {
  let aboutUsHTML = headerTemplate();
  aboutUsHTML += `
    <div class="mainAboutUs">
      <section class = "aboutUs">
        <text class= "tittleAboutUs">
          DoIt
        </text>
        <text class="TextAboutUsOne">
        Somos una red social enfocada a compartir tutoriales en todo tipo de formatos
          bajo el concepto do it yourself, que consiste en la creación, modificación 
          o reparación de objetos sin ayuda de un especialista ni a través de la producción industrial.
          DoIt hace que sea fácil y divertido cualquier proyecto que te propongas.
        </text>
        <text class="TextAboutUsTwo"> 
          ¿Te gustaría compartir tu idea? <br>
          ¿Saber como comenzar tu proyecto?<br>
          <a href="#/signIn" class="joinBtn" >¡Únete! </a>
        </text>
      </section>
    </div>
    `;
  aboutUsHTML += `
    <footer>
      <text class="textFooterHash">
        #IDidIt
      </text>
      <text class= "textFooter">
        Sigue a nuestra comunidad en Instagram y sube tus proyectos y avances
      </text>
    </footer>
  `;
  return aboutUsHTML;
};
