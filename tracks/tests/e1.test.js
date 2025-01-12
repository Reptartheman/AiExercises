
import { describe, it, expect } from 'vitest';
import { getAllTrackTitles } from '../exercises/e1';
import { tracks } from '../tracks';

describe('getAllTrackTitles', () => {
  it('should exist', () => {
    expect(getAllTrackTitles).toBeInstanceOf(Function);
  });
  it('should return all track titles', () => {
    expect(getAllTrackTitles(tracks)).toEqual([
      "Epic Anthem",
      "Smooth Jazz Jam",
      "Sunny Day",
      "Happy Hour",
      "Shit time",
      "Damnit",
      "I'm Sorry",
      "Cheese!",
      "Ambitions"
    ]);
  });
});
