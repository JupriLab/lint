module.exports = {
  extends: [
    "@jupri-lab/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
};
