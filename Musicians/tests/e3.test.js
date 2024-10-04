import { describe, it, expect } from 'vitest';
import { bornAfter1930 } from '../exercises/e3.js';
import { jazzMusicians } from '../musicians.js';

describe('bornAfter1930', () => {
  it('Should exist', () => {
    expect(bornAfter1930).toBeInstanceOf(Function);
  });
  it('There should be 1 element', () => {
    expect(bornAfter1930(jazzMusicians).length).toEqual(1)
  });
})