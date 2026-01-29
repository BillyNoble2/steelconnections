import { expect, test } from 'vitest'
import { testfunction, boltShearResistance } from './finPlateChecks1Col.js'


test('check that test file works', () => {
    expect(testfunction()).toBe(1);
});

test('bolt shear resistance check', () => {
    expect(boltShearResistance(30, 2, 60, 94.1)).toBeCloseTo(133, 0);
});