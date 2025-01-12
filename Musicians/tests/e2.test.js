import { describe, it, expect } from 'vitest';
import { musicianBornClosestTo1950 } from '../exercises/e2.js';
import { jazzMusicians } from '../musicians.js';

describe('musicianBornClosestTo1950', () => {
  it('should return the musician born closest to 1950', () => {
    const result = musicianBornClosestTo1950(jazzMusicians);
    const expectedMusician = {
      name: 'Herbie Hancock',
      instrument: 'Piano',
      born: '1940-04-12',
      famousWorks: ['Cantaloupe Island', 'Chameleon'],
      nationality: 'American'
    };
    expect(result).toEqual(expectedMusician);
  });
});
