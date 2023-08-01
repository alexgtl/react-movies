module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': 'warn',
    quotes: [0, 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    semi: [2, 'never'],
    indent: 'off',
  },
}
