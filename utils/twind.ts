/*
list of available classes: https://github.com/tw-in-js/twind/blob/main/src/__tests__/api.json
*/

import { IS_BROWSER } from '$fresh/runtime.ts';
import { Configuration, setup } from 'twind';
export * from 'twind';
export const config: Configuration = {
  darkMode: 'class',
  mode: 'silent',
};
if (IS_BROWSER) setup(config);
