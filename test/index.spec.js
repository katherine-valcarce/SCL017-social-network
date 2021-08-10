// importamos la funcion que vamos a testear
import { displayRespectiveTemplate } from '../src/lib/router.js';
import { googleLogIn, register } from '../src/lib/index.js';
import { registerTemplate } from '../src/lib/views/registerTemplate.js';

describe('displayRespectiveTemplate', () => {
  it('should be a function', () => {
    expect(typeof displayRespectiveTemplate).toBe('function');
  });
});

describe('googleLogIn', () => {
  it('should be a function', () => {
    expect(typeof googleLogIn).toBe('function');
  });
});

describe('register', () => {
  it('should be a function', () => {
    expect(typeof register).toBe('function');
  });
});

describe('containerRoot', () => {
  it('should not return HTML', () => {
    const registerHtml = registerTemplate();
    expect(registerHtml instanceof HTMLElement).toBe(false);
  });
});
