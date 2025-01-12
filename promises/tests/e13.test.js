import { describe, it, expect } from 'vitest';
import { validateAndFormatInput } from '../exercises/e13.js';

describe('validateAndFormatInput', () => {
  it('should format valid string input', async () => {
    const input = "  HELLO World ";
    const result = await validateAndFormatInput(input);
    expect(result).toBe("hello world");
  });

  it('should reject if input is not a string', async () => {
    const invalidInput = 12345;
    await expect(validateAndFormatInput(invalidInput)).rejects.toThrow();
  });
});
