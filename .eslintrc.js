module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb'],
  plugins: ['import', 'react'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
    'quote-props': 'off',
    'no-useless-constructor': 'off',
    'import/no-named-as-default': 'off',

    'react/prefer-stateless-function': 'off',
    'class-methods-use-this': 'off',
    'no-console': 'off',
  }
}