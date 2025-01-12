import { describe, it, expect } from 'vitest';
import { findMusiciansByMultipleWorksStartingWith } from './path_to_your_file';
import { jazzMusicians } from './path_to_data_file';

describe('findMusiciansByMultipleWorksStartingWith', () => {
  it('should return musicians with multiple famous works starting with "B"', () => {
    const result = findMusiciansByMultipleWorksStartingWith(jazzMusicians, 'B');
    expect(result.map(m => m.name)).toEqual(['Miles Davis']);
  });

  it('should return an empty array if no musicians have multiple works starting with the given letter', () => {
    const result = findMusiciansByMultipleWorksStartingWith(jazzMusicians, 'Z');
    expect(result).toEqual([]);
  });
});
