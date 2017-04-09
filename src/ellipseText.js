//
//  ellipseString
//  jest-demo
//
//  Created on 09/04/2017
//  Copyright (c) 2017 Brigad. All rights reserved.
//

const ELLIPSIS_SYMBOL = '...';

export const ellipseText = (text, maxLength) => {
  if (!text) {
    return '';
  }

  if (!maxLength || maxLength < (1 + ELLIPSIS_SYMBOL.length) || text.length <= maxLength) {
    return text;
  }

  return `${text.substr(0, maxLength - ELLIPSIS_SYMBOL.length)}${ELLIPSIS_SYMBOL}`;
};
