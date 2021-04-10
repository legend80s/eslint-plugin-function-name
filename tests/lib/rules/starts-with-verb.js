const rule = require("../../../lib/rules/starts-with-verb");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

ruleTester.run("starts-with-verb", rule, {
  valid: [
    {
      code: 'const foo = 1',
    },

    {
      code: `const obj = {
        methods: {
            // some comments
            getModulesType() {
            }
          }
      }`,
    },
    {
      code: `const obj = {
        didMount() {},
        shouldComponentUpdate() {},
        isComponentUpdatable() {},
        onBtnClick() {},
        handleBtnClick() {},
        generateIrregularVerb() {},
        initialize() {},
        refresh() {},
        update() {},
      }`,
    },

    {
      code: `const obj = {
        query() {},
      }`,
    },

    // abbr
    {
      code: `const obj = {
        genIrregularVerb() {},
        initData() {},
      }`,
    },

    // async
    {
      code: `const obj = {
        async initData() {},
      }`,
    },

    {
      code: `const foo = { success() {} }`,
      options: [{ whitelist: ['success'] }]
    },

    {
      code: 'function refresh() {}',
    },

    {
      code: 'function validate() {}',
    },

    {
      code: 'async function refresh() {}',
    },

    {
      code: 'const refresh = function () {}',
    },
    {
      code: 'const refresh = async function () {}',
    },

    {
      code: 'const refresh = () => {}',
    },
    {
      code: 'const refresh = async () => {}',
    },

    {
      code: 'function readFile(params) {}',
    },

    {
      code: 'function feedCat(fish) {}',
    },

    {
      code: 'function walkDog() {}',
    },

    {
      code: 'function Dog(params) {}',
    },

    {
      code: 'const store = { food: 1, toString() {}, toNumber: () => 1, from() {}, }'
    },

    {
      code: `class Animal {
        constructor() {}

        feed() {}
      }`
    }
  ],

  invalid: [
    {
      code: `const obj = {
        methods: {
            // some comments
            modulesType() {
            }
          }
      }`,
      errors: [{ message: /Function or method name should begin with a verb but/ }]
    },
    {
      code: "const foo = { status() {} }",
      errors: [{ message: /Function or method name should begin with a verb but/ }]
    },

    {
      code: `const obj = {
        componentUpdatable() {},
      }`,
      errors: [{ message: /Function or method name should begin with a verb but/ }]
    },

    {
      code: `const foo = { success() {} }`,
      errors: [{ message: /Function or method name should begin with a verb but/ }]
    },

    {
      code: `const foo = { success() {} }`,
      errors: [{ message: /Function or method name should begin with a verb but/ }],
      options: [{ whitelist: ['success'], blacklist: ['success'] }]
    },

    {
      code: `const obj = {
        query() {},
      }`,
      errors: [{ message: /Function or method name should begin with a verb but/ }],
      options: [{ blacklist: ['query'] }]
    },

    {
      code: `const obj = {
        snake() {},
      }`,
      errors: [{ message: /Function or method name should begin with a verb but/ }],
    },

    {
      code: 'const snake = function () {}',
      errors: [{ message: /Function or method name should begin with a verb but/ }],
    },
    {
      code: 'const snake = async function () {}',
      errors: [{ message: /Function or method name should begin with a verb but/ }],
    },
    {
      code: 'const snake = () => {}',
      errors: [{ message: /Function or method name should begin with a verb but/ }],
    },
    {
      code: 'const snake = async () => {}',
      errors: [{ message: /Function or method name should begin with a verb but/ }],
    },

    {
      code: 'function file(params) {}',
      errors: [{ message: /Function or method name should begin with a verb but/ }],
    },

    {
      code: 'function cat(fish) {}',
      errors: [{ message: /Function or method name should begin with a verb but/ }],
    },

    {
      code: 'function dog() {}',
      errors: [{ message: /Function or method name should begin with a verb but/ }],
    },

    {
      code: 'const store = { string() {}, }',
      errors: [{ message: /Function or method name should begin with a verb but/ }],
    },

    {
      code: `class Animal {
        constructorIt() {}
      }`,
      errors: [{ message: /Function or method name should begin with a verb but/ }],
    },
    {
      code: `class Animal {
        gender() {}
      }`,
      errors: [{ message: /Function or method name should begin with a verb but/ }],
    },
  ]
});
