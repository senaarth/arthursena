module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "no-undef": "off",
    "no-use-before-define": "off",
    "import/extensions": "off",
    "react/jsx-props-no-spreading": "off",
    "arrow-body-style": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx", ".ts", ".d.ts"] },
    ],
  },
};
