import { navBar } from './navBarTemplate.js';
import { imgExamples } from './imgExamplesTemplate.js';
import { header } from './headerTemplate.js';

export const welcome = () => {
  let welcomeView = header();
  welcomeView += navBar();
  welcomeView += imgExamples();

  return welcomeView;
};
