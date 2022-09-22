module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-console': 1,
    'no-tabs': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'react/no-unknown-property': [1, { ignore: ['strokeWidth', 'strokeLinecap', 'strokeLinejoin'] }]
  }
};
