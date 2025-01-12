import { describe, it, expect } from 'vitest';
import { sumOfEvens } from '../exercises/e1';
import { arrayOfStuff } from '../practice';

describe('sumOfEvens', () => {
  it('should return the sum of all even numbers', () => {
    const result = sumOfEvens(arrayOfStuff);
    expect(result).toBe(68);
  });

  it('should return 0 if there are no even numbers', () => {
    expect(sumOfEvens([1, 3, 5])).toBe(0);
  });

  it('should return the correct sum if there are negative even numbers', () => {
    expect(sumOfEvens([-2, 4, -6])).toBe(-4);
  });
});
