import { describe, it, expect } from 'vitest';
import { getMusiciansByDecade } from '../exercises/e3';

describe('getMusiciansByDecade', () => {
  const musiciansMock = [
    { name: 'Louis Armstrong', born: '1901-08-04' },
    { name: 'Miles Davis', born: '1926-05-26' },
    { name: 'John Coltrane', born: '1926-09-23' },
    { name: 'Duke Ellington', born: '1899-04-29' },
    { name: 'Charlie Parker', born: '1920-08-29' },
    { name: 'Ella Fitzgerald', born: '1917-04-25' },
  ];

  it('should return musicians born in the 1920s', () => {
    const result = getMusiciansByDecade(musiciansMock, 1920);
    expect(result).toEqual(['Miles Davis', 'John Coltrane', 'Charlie Parker']);
  });

  it('should return musicians born in the 1900s', () => {
    const result = getMusiciansByDecade(musiciansMock, 1900);
    expect(result).toEqual(['Louis Armstrong']);
  });

  it('should return an empty array if no musicians were born in the specified decade', () => {
    const result = getMusiciansByDecade(musiciansMock, 1950);
    expect(result).toEqual([]);
  });

  it('should handle an empty array of musicians', () => {
    const result = getMusiciansByDecade([], 1920);
    expect(result).toEqual([]);
  });

  it('should correctly handle non-standard input', () => {
    const malformedData = [
      { name: 'Mystery Artist', born: 'Invalid Date' },
      { name: 'Another Artist', born: '2022-01-01' },
    ];
    const result = getMusiciansByDecade(malformedData, 2020);
    expect(result).toEqual(['Another Artist']);
  });
});
