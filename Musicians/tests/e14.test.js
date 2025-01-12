import { describe, it, expect } from 'vitest';
import { getMusiciansByBirthYearRange } from '../exercises/e13.js';
import { jazzMusicians } from '../musicians.js';


describe('getMusiciansByBirthYearRange', () => {
  it('should return musicians born between 1910 and 1920', () => {
    const result = getMusiciansByBirthYearRange(jazzMusicians, 1910, 1920);
    expect(result.length).toBe(6);
  });

  it('should handle invalid birth year range', () => {
    const result = getMusiciansByBirthYearRange(jazzMusicians, 'invalid', 1920);
    expect(result).toBeUndefined();
  });
});
