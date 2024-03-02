const { startsWithVerb } = require('../utils/startsWithVerb');

const OPTIONS_SCHEMA = {
  type: "object",
  properties: {
    whitelist: {
      type: "array",
      items: {
        type: 'string'
      }
    },
    blacklist: {
      type: "array",
      items: {
        type: 'string'
      }
    },
  },
  additionalProperties: false
};

module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description: "Function or method name should begin with a verb",
      category: "Style",
      recommended: true,
      url: "https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/function-name-starts-with-verb#todo"
    },

    schema: [
      OPTIONS_SCHEMA,
    ],

    messages: {
      const: "'{{name}}' is constant."
    }
  },
  create: function (context) {
    return {
      // https://astexplorer.net/
      // MethodDefinition(node) {},
      MethodDefinition(node) {
        if (node.kind === 'method') {
          validate({ context, node, fnName: node.key.name });
        }
      },
      FunctionDeclaration(node) {
        if (node.type === 'FunctionDeclaration') {
          validate({ context, node, fnName: node.id.name });
        }
      },
      VariableDeclarator(node) {
        if (node.init && ['FunctionExpression', 'ArrowFunctionExpression'].includes(node.init.type) ) {
          validate({ context, node, fnName: node.id.name });
        }
      },
      Property(node) {
        if (node.value.type === 'FunctionExpression') {
          validate({ context, node, fnName: node.key.name });
        }
      },
    }
  }
};

function resolveOptions(context) {
  const option = context.options[0];

  let whitelist = [];
  let blacklist = [];

  if (typeof option === "object") {
    whitelist = Array.isArray(option.whitelist) ? option.whitelist : [];
    blacklist = Array.isArray(option.blacklist) ? option.blacklist : [];
  }

  return {
    whitelist,
    blacklist,
  }
}

function validate({context, node, fnName }) {
  const { whitelist, blacklist } = resolveOptions(context);

  const [startingWithVerb, prefix] = startsWithVerb(fnName, { extraWhitelist: whitelist, extraBlacklist: blacklist });

  if (!startingWithVerb) {
    context.report({
      node,
      message: `Function or method name should begin with a verb but "${prefix}" is not.`
    });
  }
}
