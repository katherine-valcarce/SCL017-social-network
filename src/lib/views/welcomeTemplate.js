import { welcomeImagesTemplate } from './welcomeImagesTemplate.js';
import { headerTemplate } from './headerTemplate.js';

export const welcomeTemplate = () => {
  let welcomeHTML = headerTemplate();
  welcomeHTML += welcomeImagesTemplate();

  return welcomeHTML;
};
