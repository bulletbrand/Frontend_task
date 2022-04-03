module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  ignorePatterns: ["**/service-worker/*.js"],
  plugins: ["react", "@typescript-eslint", "react-hooks", "import"],
  rules: {
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "prefer-promise-reject-errors": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "max-len": ["warn", { code: 120 }],
    "react-hooks/rules-of-hooks": "error",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-closing-bracket-location": 0,
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/no-array-index-key": "off",
    "prefer-template": "off",
    "consistent-return": "off",
    "prettier/prettier": [2, { useTabs: false }],
    "react-hooks/exhaustive-deps": "off",
    "no-param-reassign": [2, { props: false }],
    "no-debugger": "off",
    "no-empty": "off",
    "react/state-in-constructor": "off",
    "react/destructuring-assignment": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react/require-default-props": "off",
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          markers: ["#region", "#endregion", "region", "endregion"],
        },
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
      },
    },
  ],
};
