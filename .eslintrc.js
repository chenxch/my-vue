/*
 * @Descripttion: 
 * @version: 
 * @Author: caijiexuan
 * @Date: 2019-11-26 16:17:49
 * @LastEditors: maqing
 * @LastEditTime: 2020-03-03 18:23:56
 */

// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
      parser: 'babel-eslint'
  },
  env: {
      browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  globals: {
  },
  extends: ['plugin:vue/essential', 'airbnb-base', ],
  // required to lint *.vue files
  plugins: [
      'vue'
  ],
  // check if imports actually resolve
  settings: {
      'import/resolver': {
            webpack: {
                config: 'node_modules/@vue/cli-service/webpack.config.js'
            },
            alias: {
                // "map": [
                // ["@", "./src"]
                // ],
                "extensions": [".js", ".jsx", ".json"]
            }
        }
    },
  // add your custom rules here
  rules: {
      // don't require .vue extension when importing
      'import/extensions': ['error', 'always', {
          js: 'never',
          vue: 'never'
      }],
      // disallow reassignment of function parameters
      // disallow parameter object manipulation except for specific exclusions
      'no-param-reassign': 'off',
      // allow optionalDependencies
      'import/no-extraneous-dependencies': 'off',
      'linebreak-style': 'off',
      'no-unused-expressions': 'off',
      'no-restricted-globals': 'off',
      'prefer-destructuring': 'off',
      'no-plusplus': 'off',
      'max-len': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "comma-dangle": ["error", "never"],
      "no-restricted-syntax": 'off',
      "new-cap": 'off',
      "guard-for-in":'off',
      "no-underscore-dangle":'off',
      "prefer-spread":'off',
      "no-return-assign":'off',
      "import/no-dynamic-require":'off',
      "func-names":'off',
      "prefer-template":'off',
      "no-bitwise": ["error", {"allow": ["~"] }],
      "global-require":'off',
    //   "import/no-unresolved": [
    //     2,
    //     {
    //         "ignore": ["^@/"] // @ 是设置的路径别名
    //     }
    // ]
  }
}
