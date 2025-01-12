import { describe, it, expect } from 'vitest';
import { countMusiciansByDecade } from '../exercises/e15.js';
import { jazzMusicians } from '../musicians.js';

describe('countMusiciansByDecade', () => {
  it('should return the count of musicians born in each decade', () => {
    const result = countMusiciansByDecade(jazzMusicians);
    expect(result).toEqual({
      '1890s': 1,
      '1900s': 1,
      '1910s': 4,
      '1920s': 3,
      '1940s': 1
    });
  });

  it('should handle an empty musician list', () => {
    const result = countMusiciansByDecade([]);
    expect(result).toEqual({});
  });
});
