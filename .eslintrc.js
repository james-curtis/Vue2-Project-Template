module.exports = {
  root: true,
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': [0, { // 禁止声明变量后却不使用
      // 允许声明未使用变量
      'vars': 'all',
      // 参数不检查
      'args': 'none',
    }],
    'quotes': [2, 'single'], // 单引号
    'singleQuote': true,
    'indent': 2, // 缩进量
    'no-var': 2, // 禁用var，用let和const代替
    'comma-dangle': ['error', 'always-multiline'], // 逗号悬垂
  },
  parserOptions: {
    //不指定解析器的时候，eslint默认使用 Espree 作为其解析器，为了更好地兼容 babel，推荐使用 babel-eslint 作为解析器
    parser: "babel-eslint"
  }
};
