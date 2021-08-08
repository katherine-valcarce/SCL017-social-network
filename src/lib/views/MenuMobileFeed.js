export const menuFeedTemplateMobile = () => {
  const menuFeedHTMLMobile = `
    <div id="login" class="loginModal">
        <div id= "wallMenuMobile" class = "wallMenuMobile">
          <div class="sidebarMobile">
                <div id='closeMenuMobile' class='closeMenuMobile'><img src='img/return.png' class= "returnMenuMobile"/>
                </div>
              <a href="#home" class= "wallMenuCategoriesMobile"> Inicio</a>
              <a href="#profile" class= "wallMenuCategoriesMobile"> Mi Perfil</a>
              <a href="#notifications" class= "wallMenuCategoriesMobile"> Notificaciones</a>
              <a href="#messages" class= "wallMenuCategoriesMobile">  Mensajes</a>
              <a href="#saved" class= "wallMenuCategoriesMobile"> Guardados</a>
              <a href="#subscription" class= "wallMenuCategoriesMobile">Suscripciones</a>
              <a href="#settings"class= "wallMenuCategoriesMobile">Configuración</a>
              <a href="" class="wallMenuCategoriesMobileClose" id="signOut"> Cerrar Sesión</a>
          </div>
      </div>
    </div>
        `;
  return menuFeedHTMLMobile;
};
