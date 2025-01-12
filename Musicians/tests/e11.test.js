import { describe, it, expect } from 'vitest';
import { getUniqueInstruments } from '../exercises/e11.js';
import { jazzMusicians } from '../musicians.js';

describe('getUniqueInstruments', () => {
  it('should return a list of unique instruments', () => {
    const result = getUniqueInstruments(jazzMusicians);
    expect(result).toEqual(['Trumpet', 'Saxophone', 'Piano', 'Vocals']);
  });

  it('should return an empty array for empty musician list', () => {
    const result = getUniqueInstruments([]);
    expect(result).toEqual([]);
  });
});
