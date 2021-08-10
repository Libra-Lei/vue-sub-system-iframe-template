module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-empty': 'error',
    'eqeqeq': 'error',
    'no-empty-function': 'error',
    'no-multi-spaces': 'error',
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'no-var': 'error',
    'prefer-const': 'error',
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
