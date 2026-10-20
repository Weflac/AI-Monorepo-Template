export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0],
    'scope-enum': [
      1,
      'always',
      [
        'frontend',
        'backend',
        'components',
        'utils',
        'docs',
        'build',
        'deps',
        'release',
        'ci',
        'root',
      ],
    ],
  },
};
