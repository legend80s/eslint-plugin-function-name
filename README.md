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

> An eslint plugin to enforce method or function name stick to the conventions.

For example a good function name should begin with a verb.

Bad:

```js
function cat(fish) {}
function dog(distance) {}
```

Good:

```js
function feedCat(fish) {}
function walkDog(distance) {}
```

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-function-name`:

```
$ npm install eslint-plugin-function-name --save-dev
```


## Usage

Add `function-name` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "function-name"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "function-name/starts-with-verb": "error"
    }
}
```

## Supported Rules

### function-name/starts-with-verb

Function is always do somethings, so it should start with a verb and to avoid confusion with variables.

#### options

```typescript
interface IOptions {
  whitelist: string[];
  blacklist: string[];
}
```

##### example

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

code:

```js
const foo = {
  success() {}, // valid
  init() {}, // invalid
}
```

