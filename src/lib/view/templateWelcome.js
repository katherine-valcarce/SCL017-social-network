export const welcome = () => {
    
 const welcomeContainer = document.createElement('div');
        const nav = document.createElement('nav');            //   container de encabezado
          const logoDoIt = document.createElement('img');         // se agrega la imagen del logo
              logoDoIt.src = './lib/view/IMG/logoDoIt.png';
          const menu = document.createElement('ul')
                menu.className = 'menu';
             const comunidadDoItOption = document.createElement('a');
                 comunidadDoItOption.href = '#/ComunidadDoIt';
                 comunidadDoItOption.text = 'Comunidad DoIt';
             const registerOption = document.createElement('a');
                  registerOption.href = '#/Registro';
                  registerOption.text = 'Registrate';
             const loginOption = document.createElement('a');
                   loginOption.href = '#/InicioSesion';
                   loginOption.text = 'Inicia sesión';
        const main = document.createElement('main');
          const title = document.createElement('text');
          title.className = 'title';
          title.textContent = '¿Qué proyecto quieres crear hoy?';
          const welcomePublications = document.createElement('section');
                welcomePublications.className = 'welcomePosting';
                 const postingOneImg = document.createElement('img');
                  postingOneImg.src = './lib/view/IMG/posting1.png';
                  postingOneImg.className = 'post'
                 const postingTwoImg = document.createElement('img');
                  postingTwoImg.src = './lib/view/IMG/posting2.png';
                  postingTwoImg.className = 'post'
                 const postingThreeImg = document.createElement('img');
                   postingThreeImg.src = './lib/view/IMG/posting3.png';
                   postingThreeImg.className = 'post'
                 const postingFourImg = document.createElement('img');
                   postingFourImg.src = './lib/view/IMG/posting4.png';
                   postingFourImg.className = 'post'
                 const postingFiveImg = document.createElement('img');
                   postingFiveImg.src = './lib/view/IMG/posting5.png';
                   postingFiveImg.className = 'post'
                 const postingSixImg = document.createElement('img');
                   postingSixImg.src = './lib/view/IMG/posting6.png';
                   postingSixImg.className = 'post'
            const downPage = document.createElement('img');
               downPage.src = './lib/view/IMG/down.png';
               downPage.className = 'downPage';

     
     menu.appendChild(comunidadDoItOption);
     menu.appendChild(registerOption);
     menu.appendChild(loginOption);
     
     nav.appendChild(logoDoIt);
     nav.appendChild(menu);

     main.appendChild(title);
     main.appendChild(welcomePublications);
     main.appendChild(downPage);

     welcomePublications.appendChild(postingOneImg);
     welcomePublications.appendChild(postingTwoImg);
     welcomePublications.appendChild(postingThreeImg);
     welcomePublications.appendChild(postingFourImg);
     welcomePublications.appendChild(postingFiveImg);
     welcomePublications.appendChild(postingSixImg);

     welcomeContainer.appendChild(nav);
     welcomeContainer.appendChild(main);


               
    return welcomeContainer;
};