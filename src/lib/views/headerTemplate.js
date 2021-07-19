export const headerTemplate = () => {
  const headerHTML = `
    <header>
      <img src="img/logoDoIt.png" alt="logo">
      <nav class = "topNavBar">
          <a href="#/logIn">Inicia Sesión</a>
          <a href="#/register">Regístrate</a>
          <a href="#/aboutUs" class = "activeByDefault">Comunidad Doit</a>
      </nav>
    </header>
    `;
  return headerHTML;
};
