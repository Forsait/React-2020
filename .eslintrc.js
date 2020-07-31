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
    'import/no-named-as-default': 'off',
    'no-useless-constructor': 'off',
    'func-names': 'off',
    'react/destructuring-assignment': 'off',
    'class-methods-use-this': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-restricted-globals': 'off',
    'import/extensions': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': 'off',
    'react/no-unused-state': 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-unused-vars': 'off',
    'no-restricted-syntax': 'off',
    'consistent-return': 'off',
    'react/require-default-props': 'off',
    'quote-props': 'off'
  }
}