module.exports = {
  extends: 'airbnb-base',
  'globals': {
    'wx': false,
    'App': false,
    'Page': false,
    'getApp': false,
    'Component': false,
    'getCurrentPages': false,
    'requirePlugin': false,
  },
  plugins: [
  ],
  // add your custom rules here
  'rules': {
    // Soft some rules.
    'arrow-parens': 0, // Does not work with Flow generic types.
    // 'global-require': 0, // Used by webpack-isomorphic-tools and React Native.
    // 'import/first': 0, // Este sorts by atom/sort-lines natural order.
    // 'import/no-duplicates': 2,
    'import/prefer-default-export': 0, // No. Actions can have just one action.
    'no-confusing-arrow': 0, // This rule is super confusing.
    'no-duplicate-imports': 0, // github.com/babel/eslint-plugin-babel/issues/59#issuecomment-230118848
    'no-param-reassign': 0, // We love param reassignment. Naming is hard.
    'no-shadow': 0, // Shadowing is a nice language feature. Naming is hard.
    'no-console': 0,
    'space-before-function-paren': 0
  }
};
