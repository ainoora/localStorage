module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    quotes: ["warn", "double"],
    "no-console": 0,
    "object-curly-spacing": ["error", "always"],
    "prefer-const": "error",
    // "indent": ["warn", 2],
    "max-classes-per-file": 0,
    "global-require": 0,
    "no-alert": 0,
    "import/extensions": 0,
    "class-methods-use-this": 0,
    "consistent-return": 0,
    "comma-dangle": ["error", "only-multiline"],
    }
};
