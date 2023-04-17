module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "warn",
    "no-use-before-define": "error",
    "no-unused-vars": "error"
  },
  plugins:[
    "@typescript-eslint"
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
