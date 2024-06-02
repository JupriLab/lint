# @jupri-lab/eslint-config-typescript

This ESLint configuration aims to enhance your TypeScript development experience by promoting code clarity, consistency, and type safety. It leverages several plugins specifically designed for TypeScript projects.

## Installation

To install this configuration as a development dependency in your project, run the following command in your terminal.

```bash
$ npm install --save-dev @jupri-lab/eslint-config-typescript eslint eslint-plugin-sort-destructure-keys eslint-plugin-sort-keys eslint-plugin-typescript-sort-keys @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Or you can also use a package called [install-peerdeps](https://www.npmjs.com/package/install-peerdeps) to install all peer dependencies of the package. You can run the following script

```bash
$ npx install-peerdeps @jupri-lab/eslint-config-typescript
```

## Usage

Create a file named .eslintrc.json (or .eslintrc.js) in your project's root directory and add the following configuration:

```json
{
  "extends": ["@jupri-lab/typescript"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## Optional: Enhance Developer Experience with IDE Integration

For an even more seamless development experience, consider exploring your IDE's built-in ESLint integration capabilities. Most popular IDEs allow you to configure ESLint to run automatically on save. This provides real-time feedback on potential issues as you code, further improving code quality and efficiency.

### Additional Considerations:

Refer to your IDE's documentation for specific details on enabling ESLint integration.
You can customize the ESLint command to target specific files or directories.

## Configuration Overview

This configuration extends the recommended configurations from both ESLint and @typescript-eslint and overrides specific rules to enforce desired formatting and type safety practices.

## Key Features:

- **Sorting**: Enforces consistent ordering of object properties and destructured keys using the sort-keys, sort-destructure-keys, and typescript-sort-keys plugins.
- **Type Safety**: Leverages various @typescript-eslint rules to catch potential type-related issues and improve code maintainability.
- **Code Readability**: Enforces consistent use of semicolons, quotes, and commas to enhance code readability.
- **Best Practices**: Discourages the use of console.log statements (warning) and promotes recommended practices for unused variables, empty functions, and return statements.

## Detailed Rule Breakdown

Here's a breakdown of the specific rules included in this configuration:

### General Formatting:

- **no-console**: Warns against using console.log statements (encourages proper logging practices).
- **semi**: Enforces semicolons at the end of statements (style preference).
- **quotes**: Enforces double quotes for strings (style preference).
- **no-extra-semi**: Disallows unnecessary semicolons.
- **comma-dangle**: Enforces commas after the last element in multiline object literals and arrays.

### TypeScript-Specific Rules:

- **@typescript-eslint/no-empty-function**: Disallows empty functions (encourages meaningful functions).
- **@typescript-eslint/no-unused-vars**: Disallows unused variables with specific exceptions for common patterns (improves code maintainability).
- **@typescript-eslint/return-await**: Enforces the use of await before returning a promise (avoids potential issues).
- **@typescript-eslint/no-throw-literal**: Disallows throwing literals directly (encourages proper error handling).
- **@typescript-eslint/consistent-indexed-object-style**: Enforces a consistent style for indexed object literals (record or record-tuple).
- **@typescript-eslint/consistent-type-definitions**: Enforces a consistent style for type definitions (interface or type).
- **@typescript-eslint/consistent-type-exports**: Ensures consistent formatting of exported types.
- **@typescript-eslint/consistent-type-imports**: Ensures consistent formatting of imported types.
- **@typescript-eslint/no-confusing-non-null-assertion**: Disallows confusing use of the non-null assertion operator.
- **@typescript-eslint/no-empty-interface**: Disallows empty interfaces (encourages meaningful interfaces).
- **@typescript-eslint/no-import-type-side-effects**: Disallows import statements with side effects (improves code maintainability).
- **@typescript-eslint/no-inferrable-types**: Disallows types that can be inferred (encourages explicit type annotations).
- **@typescript-eslint/no-misused-promises**: Discourages misuse of promises (avoids potential issues).
- **@typescript-eslint/no-explicit-any**: Disallows the use of the any type with some exceptions and fixes to unknown where possible (encourages type safety).
- **@typescript-eslint/no-redundant-type-constituents**: Disallows redundant type constituents (improves type definition clarity).
- **@typescript-eslint/no-unnecessary-boolean-literal-compare**: Disallows unnecessary boolean literal comparisons.
- **@typescript-eslint/no-unnecessary-condition**: Disallows unnecessary conditions.
- **@typescript-eslint/no-unnecessary-type-constraint**: Disallows unnecessary type constraints.
- **@typescript-eslint/no-useless-empty-export**: Disallows useless empty exports.
- **@typescript-eslint/prefer-find**: Encourages using find over a loop for finding elements in arrays.
- **@typescript-eslint/prefer-includes**: Encourages using includes to check if a value exists in an array.
- **@typescript-eslint/sort-type-constituents**: Enforces consistent ordering of constituents within union and intersection types.

## Conclusion

This ESLint configuration provides a robust foundation for promoting developer experience and type safety in your TypeScript projects. By understanding the included rules, customization options, and integration possibilities, you can effectively tailor it to your specific project needs and coding preferences.
