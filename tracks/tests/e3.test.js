import { Track } from "../exercises/e3";
import { describe, it, expect } from 'vitest';
import { tracks } from "../tracks";



describe('Track', () => {
  it('should exist', () => {
    const track = new Track(tracks[0]);
    expect(track).toBeInstanceOf(Track)
  });
});
