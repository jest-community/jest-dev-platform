module.exports = {
  projects: [
    {
      displayName: 'test',
    },
    {
      runner: 'jest-runner-eslint',
      displayName: 'eslint',
      testMatch: ['<rootDir>/**/*.ts'],
    },
    {
      runner: 'jest-runner-tsc',
      displayName: 'tsc',
      testMatch: ['<rootDir>/**/*.ts'],
    },
  ],
};
