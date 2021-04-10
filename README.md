# eslint-plugin-function-name

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

