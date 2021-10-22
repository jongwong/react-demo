module.exports = {
  env: {
    browser: true, // 浏览器环境中的全局变量
    es2020: true, // 自动启用 es2020（es11）语法
    node: true, // 解决 process.env.NODE_ENV 报错
  },
  parserOptions: {
    // 语言特性
    ecmaFeatures: {
      jsx: true, // 支持 jsx
    },
    // 语法版本
    ecmaVersion: 11, // 支持 es11
    sourceType: "module", // 代码是 ECMAScript 模块，所以使用 module
  },
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint/eslint-plugin"],
  extends: ["eslint:recommended", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "prettier/prettier": "error",
    indent: ["error", 6],
  },
};
