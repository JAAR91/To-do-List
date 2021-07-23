import { expect } from '@jest/globals';
import TodoProjects from '../constructors.js';

/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
const element = document.createElement('div');
expect(element).not.toBeNull();
});

it('contains the variable created with the constructor', () => {
    expect(TodoProjects.list).toBe(Array);
})