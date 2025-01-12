import { describe, it, expect } from 'vitest';
import { findMusiciansByWorkStartingWith } from './path_to_your_file';
import { jazzMusicians } from './path_to_data_file';

describe('findMusiciansByWorkStartingWith', () => {
  it('should return musicians with famous works starting with "A"', () => {
    const result = findMusiciansByWorkStartingWith(jazzMusicians, 'A');
    expect(result.map(m => m.name)).toEqual(['John Coltrane', 'Dizzy Gillespie']);
  });

  it('should return an empty array if no works start with the given letter', () => {
    const result = findMusiciansByWorkStartingWith(jazzMusicians, 'Z');
    expect(result).toEqual([]);
  });
});
