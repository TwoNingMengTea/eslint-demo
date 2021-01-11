module.exports = {
  extends: [
    "stylelint-config-sass-guidelines"
  ],
  rules: {
    /* Color */
    "color-hex-case": "lower", // 指定十六进制颜色小写
    "color-hex-length": "short", // 指定十六进制颜色使用缩写
    "color-named": ["never", { "ignore": ["inside-function"] }], // 禁止使用命名的颜色，忽略在函数内部的颜色
    "color-no-invalid-hex": true, // 禁止使用无效的十六进制颜色

    /* Font family */
    "font-weight-notation": ["numeric", { "ignore": ["relative"] }], // 要求使用数字，忽略相对值：bolder和lighter

    /* Function */
    "function-calc-no-unspaced-operator": true, // 禁止在 calc 函数内使用不加空格的操作符
    "function-comma-newline-after": "always", // 在函数的逗号之后要求有一个空格

    /* Number */
    "number-leading-zero": "never",

    "indentation": 2,
    "selector-max-id": 5
  }
}
