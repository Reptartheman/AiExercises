import { describe, it, expect } from 'vitest';
import { scales } from '../../music.js'; // Update the path based on your project structure
import { getMajorScalesWithAccidentals } from '../path-to-your-function.js'; // Update the function path

describe('getMajorScalesWithAccidentals', () => {
  it('should return only major scales with sharps or flats', () => {
    const result = getMajorScalesWithAccidentals(scales.majorScales);

    // Expected output: only major scales with hasSharpsOrFlats = true
    const expected = [
      {
        name: 'F-Major',
        hasSharpsOrFlats: true,
        numberOfSharpsOrFlats: 1,
        accidentalNoteNames: ['B-flat'],
        relativeMinor: 'd-minor',
        notes: ['F', 'G', 'A', 'B-flat', 'C', 'D', 'E', 'F'],
        intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
        chords: {
          oneChord: 'F-major',
          twoChord: 'G-minor',
          threeChord: 'A-minor',
          fourChord: 'B-flat-Major',
          fiveChord: 'C-Major',
          sixChord: 'A-minor',
          sevenChord: 'E-diminished',
        },
      },
      // Add other expected scales with sharps or flats here...
    ];

    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.every(scale => scale.hasSharpsOrFlats)).toBe(true); // Ensure all have sharps/flats
  });

  it('should return an empty array if no scales have sharps or flats', () => {
    const input = [
      {
        name: 'C-Major',
        hasSharpsOrFlats: false,
        numberOfSharpsOrFlats: 0,
        accidentalNoteNames: null,
        relativeMinor: 'a-minor',
        notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
        intervalsFromRoot: ['maj2nd', 'maj3rd', 'P4th', 'P5th', 'maj6th', 'maj7th', 'P8va'],
        chords: {
          oneChord: 'C-major',
          twoChord: 'D-minor',
          threeChord: 'E-minor',
          fourChord: 'F-major',
          fiveChord: 'G-major',
          sixChord: 'A-minor',
          sevenChord: 'B-diminished',
        },
      },
    ];

    const result = getMajorScalesWithAccidentals(input);

    expect(result).toEqual([]);
  });
});
