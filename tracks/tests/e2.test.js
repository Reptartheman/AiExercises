import { describe, test, expect } from 'vitest';
import { getTracksByGenre } from '../exercises/e2.js';
import { tracks } from '../tracks';

describe('getTracksByGenre', () => {
  test('getTracksByGenre exists', () => {
    expect(getTracksByGenre).toBeDefined();
  });
  test('getTracksByGenre should return tracks of Jazz', () => {
    const result = getTracksByGenre(tracks, "Jazz");
    expect(result.length).toBe(3);
    expect(result).toEqual([
      "Smooth Jazz Jam",
      "Sunny Day",
      "Happy Hour"
    ]);
  })
})