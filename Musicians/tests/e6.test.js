import { describe, it, expect } from 'vitest';
import { getMusiciansBornOnDay } from '../exercises/e6.js';
import { jazzMusicians } from '../musicians.js';

describe('getMusiciansBornOnDay - Additional Tests', () => {
  it('should exist', () => {
    expect(getMusiciansBornOnDay).toBeInstanceOf(Function);
  });
  it('should return musicians born on Wednesday', () => {
    const result = getMusiciansBornOnDay(jazzMusicians, 'Wednesday');
    expect(result.length).toBe(4);
    expect(result.map(m => m.name)).toEqual([
      'Miles Davis', 
      'Billie Holiday', 
      'Thelonious Monk', 
      'Ella Fitzgerald'
    ]);
  });
  

  it('should handle case-insensitive day names', () => {
    const result = getMusiciansBornOnDay(jazzMusicians, 'sunday');
    expect(result.map(m => m.name)).toContain('Louis Armstrong');
  });
});
