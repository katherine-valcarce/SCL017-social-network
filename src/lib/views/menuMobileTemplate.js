import { headerTemplate } from './headerTemplate.js';

export const headerTemplateMobile = () => {
  let headerHTMLMobile = headerTemplate();
  headerHTMLMobile += `
    <div>
     <div class="menuMobile">
       <nav class="topNavBarMobile" id="topNavBarMobile">
            <a href="#/login" id="show-modal" class="mobileMenuOption"> <i class= "fa fa-user"></i>    Inicia Sesión</a> <br>
            <a href="#/register" class="mobileMenuOption" >Regístrate</a> <br>
            <a href="#/aboutUs" class="mobileMenuOption" class = "activeByDefault">Comunidad Doit</a>
       </nav>
     </div>
    </div>
    `;
  return headerHTMLMobile;
};
