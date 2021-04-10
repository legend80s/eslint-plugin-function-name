const verbs = require('verb-corpus');

const whitelist = [
  'did',
  'on',
  'off',
  'next',
  'noop',
  'is',
  'are',

  'should',
  'has',
  'can',
  'could',
  'may',
  'will',
  'would',
  'shall',
  'might',
  'must',

  'to',
  'from',
  'over',

  'error',
  'info',

  // abbreviation
  'gen',
  'init',
  'gte',
  'lte',
  'eq',
];

const blacklist = [
  'file',
  'string',
]

/**
 *
 * @param {string} fnName
 * @param {{ extraWhitelist: string[]; extraBlacklist: string[]}}
 * @returns {[startingWithVerb: boolean; prefix: string;]}
 */
exports.startsWithVerb = (fnName, { extraWhitelist = [], extraBlacklist = [] } = {}) => {
  const prefix = fnName.split(/[A-Z]/)[0].trim();

  if (prefix === '') {
    return [true, prefix];
  }

  const blocklist = blacklist.concat(extraBlacklist);

  return [
    verbs.concat(whitelist, extraWhitelist).filter(verb => !blocklist.includes(verb)).includes(prefix),
    prefix,
  ];
};
