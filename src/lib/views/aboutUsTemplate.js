import { headerTemplate } from './headerTemplate.js';

export const aboutUsTemplate = () => {
  let aboutUsHTML = headerTemplate();
  aboutUsHTML += `
    <main class="aboutUsMain">
        <section class = "aboutUs">
            <div>
                <text class= "aboutUsTitle">
                    DoIt
                </text>
            </div>
            <div class = 'aboutUsTextOneDiv'>
                <text class="aboutUsTextOne">
                Somos una red social enfocada a compartir tutoriales en todo tipo de formatos
                    bajo el concepto do it yourself, que consiste en la creación, modificación 
                    o reparación de objetos sin ayuda de un especialista ni a través de la producción industrial.
                    DoIt hace que sea fácil y divertido cualquier proyecto que te propongas.
                </text>
            </div>
            <div class='aboutUsTextTwoDiv'>
                <text class="aboutUsTextTwo"> 
                    ¿Te gustaría compartir tu idea? <br>
                    ¿Saber como comenzar tu proyecto?<br>
                    <a href="#/register" class="joinButton" >¡Únete! </a>
                </text>
            </div>
        </section>
    </main>
    `;
  aboutUsHTML += `
    <footer>
        <text class="doitHash">
            #IDidIt
        </text>
        <text class= "footerText">
            Sigue a nuestra comunidad en Instagram y sube tus proyectos y avances
        </text>
    </footer>
  `;
  return aboutUsHTML;
};
