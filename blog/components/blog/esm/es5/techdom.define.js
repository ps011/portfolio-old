
// techdom: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './techdom.core.js';
import { COMPONENTS } from './techdom.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
