// e4.test.js
import { Track } from "../exercises/e3.js";
import { createInstanceOfTrack } from "../exercises/e4";
import { describe, it, expect } from 'vitest';
import { tracks } from '../tracks';

describe('createInstanceOfTrack', () => {
  it('should exist', () => {
    expect(createInstanceOfTrack).toBeDefined();
  });

  it('should return an array of Track instances', () => {
    const result = createInstanceOfTrack(tracks);
    expect(Array.isArray(result)).toBe(true);
    result.forEach(track => {
      expect(track).toBeInstanceOf(Track);
    });
  });

  it('should return Track instances with correct properties', () => {
    const result = createInstanceOfTrack(tracks);
    const track = result[0];
    expect(track).toHaveProperty('id');
    expect(track).toHaveProperty('title');
    expect(track).toHaveProperty('genre');
    expect(track).toHaveProperty('tempo');
    expect(track).toHaveProperty('collaborators');
    expect(track).toHaveProperty('effects');
    expect(track).toHaveProperty('hasVocals');
    expect(track).toHaveProperty('isComplete');
    expect(track).toHaveProperty('duration');
    expect(track.releaseDate).toBeInstanceOf(Date);
  });
});

