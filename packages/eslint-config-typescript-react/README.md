# @jupri-lab/eslint-config-typescript-react

This ESLint configuration aims to enhance your TypeScript React development experience by promoting code clarity, consistency, and type safety. It leverages several plugins specifically designed for TypeScript projects.

## Installation

To install this configuration as a development dependency in your project, run the following command in your terminal.

```bash
$ npm install --save-dev @jupri-lab/eslint-config-typescript-react eslint eslint-plugin-sort-destructure-keys eslint-plugin-sort-keys eslint-plugin-typescript-sort-keys @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks
```

Or you can also use a package called [install-peerdeps](https://www.npmjs.com/package/install-peerdeps) to install all peer dependencies of the package. You can run the following script

```bash
$ npx install-peerdeps @jupri-lab/eslint-config-typescript-react
```

## Usage

Create a file named .eslintrc.json (or .eslintrc.js) in your project's root directory and add the following configuration:

```json
{
  "extends": ["@jupri-lab/typescript-react"],
  "parserOptions": {
    "project": "./tsconfig.json" // Target your `tsconfig.json` file
  }
}
```

## Optional: Enhance Developer Experience with IDE Integration

For an even more seamless development experience, consider exploring your IDE's built-in ESLint integration capabilities. Most popular IDEs allow you to configure ESLint to run automatically on save. This provides real-time feedback on potential issues as you code, further improving code quality and efficiency.

### Additional Considerations:

Refer to your IDE's documentation for specific details on enabling ESLint integration.
You can customize the ESLint command to target specific files or directories.

## Configuration Overview

This configuration extends the recommended configurations from @jupri-lab/[eslint-config-typescript](https://github.com/JupriLab/lint/tree/main/packages/eslint-config-typescript) and added react specific rules to enforce desired formatting and type safety practices.

## Key Features:

- **Sorting**: Enforces consistent ordering of object properties and destructured keys using the sort-keys, sort-destructure-keys, and typescript-sort-keys plugins.
- **Type Safety**: Leverages various @typescript-eslint rules to catch potential type-related issues and improve code maintainability.
- **Code Readability**: Enforces consistent use of semicolons, quotes, and commas to enhance code readability.
- **Best Practices**: Discourages the use of console.log statements (warning) and promotes recommended practices for unused variables, empty functions, and return statements.

## Detailed Rule Breakdown

Here's a breakdown of the specific rules included in this configuration:

### General Formatting:

See [@jupri-lab/eslint-config-typescript](/packages/eslint-config-typescript/README.md/#general-formatting) documentation

### TypeScript-Specific Rules:

See [@jupri-lab/eslint-config-typescript](/packages/eslint-config-typescript/README.md/#typescript-specific-rules) documentation

### React-Specific Rules:

- **react/self-closing-comp**: Enforces self-closing syntax for React components without children (error).
- **react/react-in-jsx-scope**: Disables the rule enforcing React import for JSX usage (warning removed).

## Conclusion

This ESLint configuration provides a robust foundation for promoting developer experience and type safety in your TypeScript React projects. By understanding the included rules, customization options, and integration possibilities, you can effectively tailor it to your specific project needs and coding preferences.
