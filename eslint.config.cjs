module.exports = [
  {
    ignores: ['node_modules', 'coverage', 'dist']
  },
  {
    files: ['**/*.{ts,tsx,js}'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    settings: {},
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'import': require('eslint-plugin-import'),
      'prettier': require('eslint-plugin-prettier')
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'import/order': ['warn', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], alphabetize: { order: 'asc', caseInsensitive: true } }],
      'prettier/prettier': ['warn', { singleQuote: true, trailingComma: 'all', printWidth: 100, semi: true }]
    }
  }
];
