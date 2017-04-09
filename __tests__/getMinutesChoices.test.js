//
//  getMinutesChoices.test
//  jest-demo
//
//  Created on 09/04/2017
//  Copyright (c) 2017 Brigad. All rights reserved.
//

import { getMinutesChoices } from '../src/getMinutesChoices';

describe('getMinutesChoices', () => {
  test('only path', () => {
    expect(getMinutesChoices()).toMatchSnapshot();
  });
});
