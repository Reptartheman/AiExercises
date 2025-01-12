import { describe, it, expect } from 'vitest';
import { incrementValue } from '../exercises/e3.js';

describe('incrementValue', () => {
  it('should increment the value twice', async () => {
    const result = await incrementValue(5);
    expect(result).toBe(7);
  });
});
