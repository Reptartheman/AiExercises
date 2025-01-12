import { describe, it, expect } from 'vitest';
import { getMusiciansBornBetween } from '../exercises/e12.js';
import { jazzMusicians } from '../musicians.js';

describe('getMusiciansBornBetween', () => {
  it('should return musicians born between 1915 and 1925', () => {
    const result = getMusiciansBornBetween(jazzMusicians, '1915-01-01', '1925-12-31');
    expect(result.length).toBe(5);
  });

  it('should handle invalid date range', () => {
    const result = getMusiciansBornBetween(jazzMusicians, 'invalid-date', '1925-12-31');
    expect(result).toBeUndefined();
  });
});
