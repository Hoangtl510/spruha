module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    // 'plugin:vue/vue3-recommended',
    'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 4
      },
      "multiline": {
        "max": 1
      }
    }],
    "vue/require-default-prop": "off",
    'no-console': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "prefer-const": "error",
    "no-use-before-define": "error",
    "eqeqeq": ["warn", "always"],
    // "id-length": ["error", { "min": 2 }],
    "no-empty": "error",
    "new-cap": ["error", { "newIsCap": true }],
    "func-call-spacing": ["error", "never"],
    // "multiline-comment-style": ["error", "bare-block"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "lines-between-class-members": ["error", "always"],
    "max-len": ["warn", { "code": 120}],
    "brace-style": ["warn", "stroustrup", {"allowSingleLine": true }],
    "block-spacing": "warn",
    "no-trailing-spaces": "warn",
    'space-before-function-paren': ['error', {
      "anonymous": 'always',
      "named": 'always',
      "asyncArrow": 'always'
    }],
    "space-infix-ops": "error",
    "key-spacing": ["error", { "beforeColon": false }],
  },
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  }
}