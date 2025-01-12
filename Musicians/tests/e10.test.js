import { describe, it, expect } from 'vitest';
import { findMusicianWithShortestWork } from '../exercises/e10.js';
import { jazzMusicians } from '../musicians.js';

describe('findMusicianWithShortestWork', () => {
  it('should return the musician with the shortest famous work title', () => {
    const result = findMusicianWithShortestWork(jazzMusicians);
    expect(result.name).toBe('Herbie Hancock');
  });
});
