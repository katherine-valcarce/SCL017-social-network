import { imgExamples } from './imgExamplesTemplate.js';
import { header } from './headerTemplate.js';

export const welcome = () => {
  let welcomeView = header();
  welcomeView += imgExamples();

  return welcomeView;
};
