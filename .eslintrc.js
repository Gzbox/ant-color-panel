const base = require('@umijs/fabric/dist/eslint');

module.exports = {
  ...base,
  ignorePatterns: ['src/icons/*'],
  rules: {
    ...base.rules,
    'no-template-curly-in-string': 0,
    'prefer-promise-reject-errors': 0,
    'react/no-array-index-key': 0,
    'react/sort-comp': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/consistent-type-imports': 2,
  },
};
