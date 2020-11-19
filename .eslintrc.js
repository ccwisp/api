module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['standard', 'plugin:prettier/recommended', 'eslint:recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    // Add here all the extra rules based on the developer preferences
    'no-console': 'off',
  },
};
