module.exports = {
  "parser": "babel-eslint",
  "extends": ["react", "prettier"],
  "plugins": ["react", "import", "prettier", "jest", "react-hooks"],
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest/globals": true
  },
  "rules": {
    "semi": ["error", "never"],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "react/prop-types": [0],
    "space-before-function-paren": 0,
    "prefer-reflect": 0,
    "quotes": ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "no-lonely-if": 0,
    "max-depth": 0,
    "no-unused-vars": 1,
    "multiline-ternary": 0,
    "prettier/prettier": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
