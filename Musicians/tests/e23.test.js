import { describe, it, expect } from 'vitest';
import { findMusiciansActiveInPeriod } from './path_to_your_file';
import { jazzMusicians } from './path_to_data_file';

describe('findMusiciansActiveInPeriod', () => {
  it('should return musicians active during 1950s', () => {
    const result = findMusiciansActiveInPeriod(jazzMusicians, 1950);
    expect(result.length).toBeGreaterThan(0);
  });
});
