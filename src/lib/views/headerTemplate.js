export const headerTemplate = () => {
  const headerHTML = `
    <header>
     <div class="welcomeMenuDesk">
        <a  href=""><img src="img/logoDoIt.png" alt="logo" style= "height: 100px"></a>
        <nav class = "topNavBar">
            <a href="#/login" id="show-modal">Inicia Sesión</a>
            <a href="#/register">Regístrate</a>
            <a href="#/aboutUs" class = "activeByDefault">Comunidad Doit</a>
        </nav>
     </div>
     <div class="welcomeMenuMobile">
        <a  href=""><img src="img/logoDoIt.png" alt="logo"></a>
        <i id="menuMobileBtn" style = "font-size: 50px; display: flex;
        justify-content: flex-end;" class= " menuBars fa fa-bars"></i>
     </div>
    </header>

    `;
  return headerHTML;
};
