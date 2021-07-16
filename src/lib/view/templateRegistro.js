export const registration = () => {
    const divRegistration = document.createElement('main');
    divRegistration.className = 'divRegistration';
     const textoregistro = document.createElement ('text')
     textoregistro.className = 'title';
     textoregistro.textContent = 'REGISTRATE';
divRegistration.appendChild(textoregistro);

return divRegistration;
 };