// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintConfigPrettier from 'eslint-config-prettier';
import vuePrettier from '@vue/eslint-config-prettier';

export default withNuxt({
  ...eslintConfigPrettier,
  ...vuePrettier,
  files: ['**/*.{js,ts,mjs,cjs,vue}'],
  rules: {
    'no-console': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always', // <img />
          normal: 'always', // <div />
          component: 'always', // <MyComponent />
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },

  ignores: ['dist/**', 'node_modules/**'],
});
