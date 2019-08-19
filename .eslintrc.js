const path = require("path");

module.exports = {
  env: {
    browser: true
  },
  extends: [
    "airbnb",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/sort-comp": [
      1,
      {
        order: [
          "type-annotations",
          "static-methods",
          "instance-variables",
          "lifecycle",
          "everything-else",
          "render"
        ]
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx"]
      }
    ]
    // 'arrow-parens': ['error', 'as-needed'],
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-useless-constructor": "error",
        "no-unused-vars": "off",
        "no-useless-constructor": "off"
      }
    }
  ]
};
