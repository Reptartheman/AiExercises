import { describe, it, expect } from 'vitest';
import { safeDivision } from '../exercises/e4.js';

describe('safeDivision', () => {
  it('should resolve with correct division when b is non-zero', () => {
    return safeDivision(6, 2).then(result => {
      expect(result).toBe(3);
    });
  });

  it('should reject with "Cannot divide by zero" when b is zero', () => {
    return safeDivision(6, 0).catch(error => {
      expect(error).toBe('Cannot divide by zero');
    });
  });
});
