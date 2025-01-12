import { describe, it, expect } from 'vitest';
import { getAverageBirthYear } from '../exercises/e8.js';
import { jazzMusicians } from '../musicians.js';

describe('getAverageBirthYear', () => {
  it('should return the average birth year of musicians', () => {
    const result = getAverageBirthYear(jazzMusicians);
    expect(result).toBeCloseTo(1917.8, 1);
  });

  it('should return 0 for an empty array', () => {
    const result = getAverageBirthYear([]);
    expect(result).toBe(0);
  });
});
