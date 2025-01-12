import { describe, it, expect } from 'vitest';
import { findMusiciansBornInMonth } from './path_to_your_file';
import { jazzMusicians } from './path_to_data_file';

describe('findMusiciansBornInMonth', () => {
  it('should return musicians born in April', () => {
    const result = findMusiciansBornInMonth(jazzMusicians, 4);
    expect(result.length).toBe(3);
  });

  it('should handle invalid month input', () => {
    const result = findMusiciansBornInMonth(jazzMusicians, 13);
    expect(result).toBeUndefined();
  });
});
