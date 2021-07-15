import { header } from './headerTemplate.js';
import { navBar } from './navBarTemplate.js';

export const aboutUs = () => {
  let aboutUsView = header();
  aboutUsView += navBar();
  aboutUsView += `
      <section class = "aboutUs">
          <p>
          "Red social enfocada a compartir tutoriales (en distintos formatos) 
          bajo el concepto do it yourself, que consiste en la creación, modificación 
          o reparación de objetos sin ayuda de un especialista ni a través de la producción industrial.
          </p>
      </section>
    `;

  return aboutUsView;
};
