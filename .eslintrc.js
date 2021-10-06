module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react', 'jest',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/prop-types': ['off'],
  },
};
