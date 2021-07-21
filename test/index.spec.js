// importamos la funcion que vamos a testear
import { displayRespectiveTemplate } from '../src/lib/router.js';

describe('displayRespectiveTemplate', () => {
  it('should be a function', () => {
    expect(typeof displayRespectiveTemplate).toBe('function');
  });
});
