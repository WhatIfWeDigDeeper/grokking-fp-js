module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    node: true,
    jest: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': ['warn', { 'allowExpressions': true }],
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/consistent-type-imports': ['warn', { 'prefer': 'type-imports' }],
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    'import/order': ['warn', { 'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], 'alphabetize': { 'order': 'asc', 'caseInsensitive': true } }],
    'prettier/prettier': ['warn', { singleQuote: true, trailingComma: 'all', printWidth: 100, semi: true }]
  }
};
