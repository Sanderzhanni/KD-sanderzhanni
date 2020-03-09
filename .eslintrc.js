module.exports = {
  settings: {
    react: {
      version: require('./package.json').dependencies.react,
    },
  },
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "env": {
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],

  "rules": {
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/explicit-function-return-type": 2,
    "@typescript-eslint/indent": ["error", 2],
    "indent": ["error", 2],
    "@typescript-eslint/no-explicit-any" : 1,
    "@typescript-eslint/no-empty-function": 2,
    "@typescript-eslint/type-annotation-spacing": 2,
    "@typescript-eslint/comma-spacing": 2,
    "no-extra-semi": 2,
    "no-unreachable": 2,
    "eqeqeq": 2,
    "camelcase": 2,
    "semi": ["error", "always"],
  }
};