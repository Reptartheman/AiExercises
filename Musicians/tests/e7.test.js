import { describe, it, expect } from 'vitest';
import { getTotalNumberOfWorks } from '../exercises/e7.js';
import { jazzMusicians } from '../musicians.js';

describe('getTotalNumberOfWorks', () => {
  it('should return the total number of famous works', () => {
    const result = getTotalNumberOfWorks(jazzMusicians);
    expect(result).toBe(20);
  });

  it('should handle empty musician list', () => {
    const result = getTotalNumberOfWorks([]);
    expect(result).toBe(0);
  });
});

