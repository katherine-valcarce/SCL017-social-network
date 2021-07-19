export const headerTemplate = () => {
  const headerHTML = `
    <header>
      <a  href=""><img src="img/logoDoIt.png" alt="logo"></a>
      <nav class = "topNavBar">
          <a href="#/login" id="show-modal">Inicia Sesión</a>
          <a href="#/register">Regístrate</a>
          <a href="#/aboutUs" class = "activeByDefault">Comunidad Doit</a>
      </nav>
    </header>
    `;
  return headerHTML;
};
