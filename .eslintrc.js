// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    commonjs: true,
    browser: true,
  },
  extends: [
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    'standard',
    // https://github.com/feross/eslint-config-standard-react
    'standard-react'
  ],
  // https://github.com/yannickcr/eslint-plugin-react
  plugins: [
    'react',
    'babel',
    'promise'
  ],
  // add your custom rules here
  'rules': {
    // "react-hooks/rules-of-hooks": "warn",
    // "react-hooks/exhaustive-deps": "warn",
    'no-empty': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'spaced-comment': 0,
    'space-before-function-paren': 'off',
    'padded-blocks': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',
    "react/no-unused-prop-types": "off",
    "react/react-in-jsx-scope": 'off',
    "react/jsx-indent": 'off',
    "react/jsx-boolean-value": 'off',
    "space-before-blocks": 'off',
    'jsx-quotes': 'off',
    'react/jsx-tag-spacing': 'off',
    "react/jsx-equals-spacing": 'off',
    'react/jsx-space-before-closing': 'off',
    "react-native/no-unused-styles": 'off',
    'indent': 'off',
    "key-spacing": 'off',
    "semi": 'off',
    "comma-dangle": 'off',
    "handle-callback-err": 'off',
    "no-unused-vars": 'off',
    "no-extra-boolean-cast": 'off',
    "object-property-newline": 'off',
    "no-useless-constructor": "off",

    "comma-spacing": "off", //强制在逗号前后使用一致的空格
    "no-trailing-spaces": 'off', //禁用行尾空格
    "no-multi-spaces": 'off',
    "no-multiple-empty-lines": 'off',
    'no-unused-expressions': 'off',
    "space-infix-ops": 'off' //要求操作符周围有空格


  }
}
