export const navBar = () => {
  const navBarView = `
      <nav class = "topNavBar">
          <a href="#/logIn">Inicia Sesión</a>
          <a href="#/signIn">Regístrate</a>
          <a href="#/aboutUs" class = "activeByDefault">Comunidad Doit</a>
      </nav>
    `;
  return navBarView;
};

/* export const menu = () => {
  const viewMenu = document.createElement('div');

  const menuOption3 = document.createElement('a');
  menuOption3.textContent = 'Inicia Sesión';
  menuOption3.href = '#/logIn';
  viewMenu.appendChild(menuOption3);

  const menuOption2 = document.createElement('a');
  menuOption2.textContent = 'Regístrate';
  menuOption2.href = '#/signIn';
  viewMenu.appendChild(menuOption2);

  const menuOption1 = document.createElement('a');
  menuOption1.className = 'activeByDefault';
  menuOption1.textContent = 'Comunidad Doit';
  menuOption1.href = '#/aboutUs';
  viewMenu.appendChild(menuOption1);

  return viewMenu;
}; */
