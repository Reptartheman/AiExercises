import { describe, it, expect } from 'vitest';
import { countGenres } from '../exercises/e2';

describe('countGenres', () => {
  const tracksMock = [
    { genre: 'Jazz' },
    { genre: 'Electronic' },
    { genre: 'Jazz' },
    { genre: 'Rock' },
    { genre: 'Electronic' },
  ];

  it('should correctly count genres', () => {
    const result = countGenres(tracksMock);
    expect(result).toEqual({
      Jazz: 2,
      Electronic: 2,
      Rock: 1,
    });
  });

  it('should return an empty object for an empty tracks array', () => {
    const result = countGenres([]);
    expect(result).toEqual({});
  });

  it('should handle a single track correctly', () => {
    const result = countGenres([{ genre: 'Jazz' }]);
    expect(result).toEqual({ Jazz: 1 });
  });

  it('should handle tracks with undefined genres gracefully', () => {
    const result = countGenres([{ genre: undefined }, { genre: 'Jazz' }]);
    expect(result).toEqual({ Jazz: 1, undefined: 1 });
  });
});

