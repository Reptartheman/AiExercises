import { describe, it, expect } from 'vitest';
import { findYoungestMusician } from '../exercises/e16.js';
import { jazzMusicians } from '../musicians.js';

describe('findYoungestMusician', () => {
  it('should return Herbie Hancock as the youngest musician', () => {
    const result = findYoungestMusician(jazzMusicians);
    expect(result.name).toBe('Herbie Hancock');
  });
});
