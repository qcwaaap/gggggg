import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'prefer-const': 'error',
    },
  },
  pluginJs.configs.recommended,
];
