//
//  ellipseString.test
//  jest-demo
//
//  Created on 09/04/2017
//  Copyright (c) 2017 Brigad. All rights reserved.
//

import { ellipseText } from '../src/ellipseText';

describe('ellipseText', () => {
  test('invalid text', () => {
    expect(ellipseText()).toBe('');
    expect(ellipseText(null)).toBe('');
    expect(ellipseText('')).toBe('');
  });

  test('invalid maxLength', () => {
    expect(ellipseText('text')).toBe('text');
    expect(ellipseText('text', null)).toBe('text');
    expect(ellipseText('text', -1)).toBe('text');
    expect(ellipseText('text', 0)).toBe('text');
  });

  test('maxLength too high', () => {
    expect(ellipseText('text', 1)).toBe('text');
    expect(ellipseText('text', 4)).toBe('text');
  });

  test('happy path', () => {
    expect(ellipseText('text2', 4)).toBe('t...');
    expect(ellipseText('Long text, very long test', 12)).toBe('Long text...');
  });
});
