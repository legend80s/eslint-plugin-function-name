# eslint-plugin-function-name

<p>
  <a href="https://www.npmjs.com/package/eslint-plugin-function-name" target="_blank">
    <img src="https://img.shields.io/npm/v/eslint-plugin-function-name.svg" alt="npm version" />
  </a>

  <a href="https://www.npmjs.com/package/eslint-plugin-function-name">
    <img src="https://img.shields.io/npm/dm/eslint-plugin-function-name.svg" alt="npm downloads" />
  </a>

  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />

  <a href="https://www.npmjs.com/package/git-commit-msg-linter" target="_blank">
    <img alt="linter by git commit msg linter" src="https://img.shields.io/badge/git-commit%20msg%20linter-blue" />
  </a>
</p>

> An eslint plugin to enforce method or function name conforms to conventions.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-function-name`:

```sh
npm install eslint-plugin-function-name --save-dev
```

## Usage

Add `function-name` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "function-name"
  ],
  "rules": {
    "function-name/starts-with-verb": "error"
  }
}
```

## Supported Rules

### function-name/starts-with-verb

Function is always do something, so it should start with a verb and to avoid confusion with variables.

👎 Examples of **incorrect** code for this rule:

```js
function cat(fish) {}
function dog(distance) {}
```

👍 Examples of **correct** code for this rule:

```js
function feedCat(fish) {}
function walkDog(distance) {}
```

#### options

```typescript
interface IOptions {
  whitelist: string[];
  blacklist: string[];
}
```

.eslintrc.js

```javascript
{
  "rules": {
    "function-name/starts-with-verb": ["error", {
      "whitelist": ["success"],
      "blacklist": ["init"]
    }]
  }
}
```

👎 Examples of **incorrect** code for this rule:

```js
// ..."blacklist": ["init"]...
const foo = {
  init() {},
}
```

👍 Examples of **correct** code for this rule:

```js
// ..."whitelist": ["success"]...
const foo = {
  success() {},
}
```

## Develop

- Use [Bun](https://bun.sh/) to manage everything for example installing.
