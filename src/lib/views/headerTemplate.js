export const headerTemplate = () => {
  const headerHTML = `
    <header>
     <div class="welcomeMenuDesk">
        <a  href=""><img src="img/logoDoIt.png" alt="logo"></a>
        <nav class = "topNavBar">
            <a href="#/login" id="show-modal">Inicia Sesión</a>
            <a href="#/register">Regístrate</a>
            <a href="#/aboutUs" class = "activeByDefault">Comunidad Doit</a>
        </nav>
     </div>
     <div class="welcomeMenuMobile">
        <a  href=""><img src="img/logoDoIt.png" alt="logo"></a>
        <img src="img/btnMenuMobile.png" id="menuMobileBtn" ></a>
     </div>
    </header>

    `;
  return headerHTML;
};
