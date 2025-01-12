import { describe, it, expect } from 'vitest';
import { findMusiciansByWorkWordCount } from './path_to_your_file';
import { jazzMusicians } from './path_to_data_file';

describe('findMusiciansByWorkWordCount', () => {
  it('should return musicians with famous works containing 3 words', () => {
    const result = findMusiciansByWorkWordCount(jazzMusicians, 3);
    expect(result.length).toBe(2);
  });
});
