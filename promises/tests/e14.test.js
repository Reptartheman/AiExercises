import { describe, it, expect } from 'vitest';
import { checkEvenAndDouble } from '../exercises/e14.js';

describe('checkEvenAndDouble', () => {
  it('should double and add ten to even numbers', async () => {
    const number = 4;
    const result = await checkEvenAndDouble(number);
    expect(result).toBe(18); // Explanation: (4 * 2) + 10 = 18
  });

  it('should reject if the number is odd', async () => {
    const oddNumber = 3;
    await expect(checkEvenAndDouble(oddNumber)).rejects.toThrow();
  });
});
