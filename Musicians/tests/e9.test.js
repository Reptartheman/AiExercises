import { describe, it, expect } from 'vitest';
import { findClosestMusicianByDate } from '../exercises/e9.js';
import { jazzMusicians } from '../musicians.js';

describe('findClosestMusicianByDate', () => {
  it('should return the musician born closest to 1915-01-01', () => {
    const result = findClosestMusicianByDate(jazzMusicians, '1915-01-01');
    expect(result.name).toBe('Billie Holiday');
  });

  it('should handle invalid date input', () => {
    const result = findClosestMusicianByDate(jazzMusicians, 'invalid-date');
    expect(result).toBeUndefined();
  });
});
