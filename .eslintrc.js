module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['next/core-web-vitals', 'eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-anonymous-default-export': 'off',
    'react/no-unknown-property': 'off',
    'no-extra-boolean-cast': 'off',
    indent: ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    '@next/next/no-img-element': 'off',
  },
};
