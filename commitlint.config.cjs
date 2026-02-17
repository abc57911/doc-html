module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type enum
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'ci',
      ],
    ],
    // Type must be lowercase
    'type-case': [2, 'always', 'lower-case'],
    // Subject cannot be empty
    'subject-empty': [2, 'never'],
    // Subject cannot end with a period
    'subject-full-stop': [2, 'never', '.'],
    // Subject max length
    'subject-max-length': [2, 'always', 72],
    // Header max length
    'header-max-length': [2, 'always', 100],
    // Body must have leading blank line
    'body-leading-blank': [2, 'always'],
  },
  parserOpts: {
    issuePrefixes: ['#', 'GH-'],
  },
};
