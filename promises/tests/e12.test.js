import { describe, it, expect } from 'vitest';
import { delayedFormatString } from '../exercises/e12.js';

describe('delayedFormatString', () => {
  it('should format the string after the delay', async () => {
    const str = "hello";
    const delay = 500;
    const result = await delayedFormatString(str, delay);
    expect(result).toBe("HELLO!!!");
  });
});
