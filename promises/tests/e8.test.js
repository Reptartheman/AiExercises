import { describe, it, expect } from 'vitest';
import { conditionalPromise } from '../exercises/e8.js';

describe('conditionalPromise', () => {
  it('should resolve with "Even number" if the number is even', () => {
    return conditionalPromise(4).then(result => {
      expect(result).toBe('Even number');
    });
  });

  it('should reject with "Odd number" if the number is odd', () => {
    return conditionalPromise(3).catch(error => {
      expect(error).toBe('Odd number');
    });
  });
});
