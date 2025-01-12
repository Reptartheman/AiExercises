import { describe, it, expect } from 'vitest';
import { sortMusiciansByWorkTitleLength } from './path_to_your_file';
import { jazzMusicians } from './path_to_data_file';

describe('sortMusiciansByWorkTitleLength', () => {
  it('should sort musicians by their longest work title length', () => {
    const result = sortMusiciansByWorkTitleLength(jazzMusicians);
    expect(result[0].name).toBe('Duke Ellington');
  });
});
