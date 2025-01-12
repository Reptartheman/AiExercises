import { describe, it, expect } from 'vitest';
import generateFullNames from '../exercises/e1.js';

describe('generateFullNames', () => {
    it('should return an array of full names', () => {
        const users = [
            { firstName: 'John', lastName: 'Doe' },
            { firstName: 'Jane', lastName: 'Smith' },
        ];
        const result = generateFullNames(users);
        expect(result).toEqual(['John Doe', 'Jane Smith']);
    });

    it('should handle an empty array', () => {
        const result = generateFullNames([]);
        expect(result).toEqual([]);
    });
});
