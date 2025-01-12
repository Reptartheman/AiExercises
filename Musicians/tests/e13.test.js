import { describe, it, expect } from 'vitest';
import { findFirstMusicianByWord } from '../exercises/e13.js';
import { jazzMusicians } from '../musicians.js';

describe('findFirstMusicianByWord', () => {
  it('should return the first musician with a famous work containing the word "Love"', () => {
    const result = findFirstMusicianByWord(jazzMusicians, 'Love');
    expect(result.name).toBe('John Coltrane');
  });

  it('should return undefined if no musician has a work containing the word', () => {
    const result = findFirstMusicianByWord(jazzMusicians, 'Unknown');
    expect(result).toBeUndefined();
  });
});
