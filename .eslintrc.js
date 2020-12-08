module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  parserOptions: {
    "parser": "babel-eslint"
  },
  rules: {
    /* Possible Errors */
    "no-await-in-loop": ["error"],
    "no-unreachable": ["error"],

    /* Best Practices */
    "array-callback-return": ["error"],
    "curly": ["error", "multi"],
    "default-case": ["error"],
    "eqeqeq": ["error"],
    "guard-for-in": ["error"],
    "no-div-regex": ["error"],
    "no-else-return": ["error", { "allowElseIf": true }],
    "no-useless-return": ["error"],
    "require-await": ["error"],
    "require-unicode-regexp": ["error"],

    /* Variables */
    "no-unused-vars": ["off"],
    "no-use-before-define": ["error"],

    /* Node.js and CommonJS */
    "global-require": ["error"],

    /* Stylistic Issues */
    "array-bracket-newline": ["error", { "multiline": true }],
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": ["error", { "properties": "never", "ignoreDestructuring": true }], // 强制使用骆驼拼写法命名约定
    "comma-spacing": ["error", { "before": false, "after": true }], // 强制在逗号周围使用空格
    "comma-style": ["error"], // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    "func-call-spacing": ["error"], // 禁止在函数名和开括号之间有空格
    "indent": ["error", 2],
    "implicit-arrow-linebreak": ["error"], // 禁止在箭头函数体之前出现换行
    "jsx-quotes": ["error", "prefer-double"], //  强制所有不包含双引号的 JSX 属性值使用双引号
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": "strict" }], // 强制在对象字面量的键和值之间使用一致的空格
    "keyword-spacing": ["error", { "before": true, "after": true }], // 强制关键字周围空格的一致性
    "lines-between-class-members": ["error"], // 要求在类成员之后有一行空行
    "max-depth": ["error", 5], // 强制块语句的最大可嵌套深度
    "no-lonely-if": ["error"], // 禁止 if 语句作为唯一语句出现在 else 语句块中
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }], // 不允许多个空行
    "no-negated-condition": ["error"], // 禁用否定表达式
    "no-unneeded-ternary": ["error"], // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    "no-whitespace-before-property": ["error"], // 禁止属性前有空白
    "nonblock-statement-body-position": ["error"], // 禁止单行语句之前有换行
    "operator-assignment": ["error"], // 要求在可能的情况下使用简化的赋值操作符
    "quotes": ["error", "single"], // 要求尽可能地使用单引号
    "semi": ["error", "never"], // 禁止在语句末尾使用分号 (除了消除以 [、(、/、+ 或 - 开始的语句的歧义)
    "semi-spacing": ["error", {"before": false, "after": true}], // 强制分号后有空格
    "space-before-blocks": ["error", "always"], // 块语句必须总是至少有一个前置空格
    "space-before-function-paren": ["error", "never"], // 禁止函数圆括号之前有一个空格
    "space-in-parens": ["error"], // 强制圆括号内没有空格
    "space-infix-ops": ["error"], // 要求操作符周围有空格
    "spaced-comment": ["error", "always", { "block": { "balanced": true } }], // 要求在注释前有空白
    "switch-colon-spacing": ["error", { "after": true, "before": false }], // 强制 switch 的冒号左边无空格，右有空格
    "template-tag-spacing": ["error"],
    "wrap-regex": ["error"],

    /* ECMAScript 6 */
    "arrow-body-style": ["error"],
    "arrow-parens": ["error"],
    "arrow-spacing": ["error"],
    "no-duplicate-imports": ["error"],
    "no-useless-computed-key": ["error"],
    "no-var": ["error"],
    "prefer-destructuring": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-template": ["error"],
    "template-curly-spacing": ["error"],
  }
}
