import { describe, it, expect } from 'vitest';
import { resolveOrReject } from '../exercises/e2.js';

describe('resolveOrReject', () => {
  it('should resolve with "Success!" if true is passed', async () => {
    const result = await resolveOrReject(true);
    expect(result).toBe('Success!');
  });

  it('should reject with "Failure!" if false is passed', async () => {
    await expect(resolveOrReject(false)).rejects.toBe('Failure!');
  });
});
