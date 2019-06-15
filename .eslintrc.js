module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    extends: 'standard',
  },
  plugins: ['react'],
  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    allowTemplateLiterals: true,
  },
};
