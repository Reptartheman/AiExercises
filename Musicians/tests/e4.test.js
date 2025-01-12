import { describe, it, expect } from 'vitest';
import { groupByInstrument } from '../exercises/e4.js';
import { jazzMusicians } from '../musicians.js';

describe('groupByInstrument', () => {
  it('Should group musicians by their instrument', () => {
    const result = groupByInstrument(jazzMusicians);
    const expected = {
      Trumpet: [
        { name: 'Louis Armstrong', instrument: 'Trumpet', born: '1901-08-04', famousWorks: ['What a Wonderful World', 'La Vie En Rose'], nationality: 'American' },
        { name: 'Miles Davis', instrument: 'Trumpet', born: '1926-05-26', famousWorks: ['Kind of Blue', 'Bitches Brew'], nationality: 'American' },
        { name: 'Dizzy Gillespie', instrument: 'Trumpet', born: '1917-10-21', famousWorks: ['A Night in Tunisia', 'Salt Peanuts'], nationality: 'American' }
      ],
      Saxophone: [
        { name: 'John Coltrane', instrument: 'Saxophone', born: '1926-09-23', famousWorks: ['A Love Supreme', 'Giant Steps'], nationality: 'American' },
        { name: 'Charlie Parker', instrument: 'Saxophone', born: '1920-08-29', famousWorks: ['Ornithology', 'Now\'s the Time'], nationality: 'American' }
      ],
      Piano: [
        { name: 'Duke Ellington', instrument: 'Piano', born: '1899-04-29', famousWorks: ['It Don\'t Mean a Thing (If It Ain\'t Got That Swing)', 'Mood Indigo'], nationality: 'American' },
        { name: 'Thelonious Monk', instrument: 'Piano', born: '1917-10-10', famousWorks: ['Round Midnight', 'Straight, No Chaser'], nationality: 'American' },
        { name: 'Herbie Hancock', instrument: 'Piano', born: '1940-04-12', famousWorks: ['Cantaloupe Island', 'Chameleon'], nationality: 'American' }
      ],
      Vocals: [
        { name: 'Billie Holiday', instrument: 'Vocals', born: '1915-04-07', famousWorks: ['Strange Fruit', 'God Bless the Child'], nationality: 'American' },
        { name: 'Ella Fitzgerald', instrument: 'Vocals', born: '1917-04-25', famousWorks: ['Summertime', 'Dream a Little Dream of Me'], nationality: 'American' }
      ]
    };
    expect(result).toEqual(expected);
  });
  it('should return an empty object when given an empty array', () => {
    const result = groupByInstrument([]);
    expect(result).toEqual({});
  });

  it('should group all musicians under a single instrument', () => {
    const musicians = [
      { name: 'Test Musician', instrument: 'Guitar', born: '1980-01-01', famousWorks: ['Test Song'], nationality: 'Test' },
      { name: 'Another Test', instrument: 'Guitar', born: '1970-01-01', famousWorks: ['Another Test Song'], nationality: 'Test' }
    ];
    const result = groupByInstrument(musicians);
    const expected = {
      Guitar: [
        { name: 'Test Musician', instrument: 'Guitar', born: '1980-01-01', famousWorks: ['Test Song'], nationality: 'Test' },
        { name: 'Another Test', instrument: 'Guitar', born: '1970-01-01', famousWorks: ['Another Test Song'], nationality: 'Test' }
      ]
    };
    expect(result).toEqual(expected);
  });
});