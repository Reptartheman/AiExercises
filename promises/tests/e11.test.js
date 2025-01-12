import { describe, it, expect } from 'vitest';
import { chainArithmetic } from '../exercises/e11.js';

describe('chainArithmetic', () => {
  it('should correctly chain arithmetic operations', async () => {
    const number = 2;
    const result = await chainArithmetic(number);
    expect(result).toBe(19); // Explanation: ((2 + 5) * 3) - 2 = 19
  });
});


