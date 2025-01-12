import { describe, it, expect } from 'vitest';
import { getMedianBirthYear } from './path_to_your_file';
import { jazzMusicians } from './path_to_data_file';

describe('getMedianBirthYear', () => {
  it('should return the median birth year of musicians', () => {
    const result = getMedianBirthYear(jazzMusicians);
    expect(result).toBe(1917);
  });

  it('should return 0 for an empty array', () => {
    const result = getMedianBirthYear([]);
    expect(result).toBe(0);
  });
});
