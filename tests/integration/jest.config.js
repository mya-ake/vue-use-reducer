module.exports = {
  rootDir: process.cwd(),
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@fixtures/(.*)$': '<rootDir>/tests/fixtures/$1',
  },
  testMatch: ['**/tests/integration/**/*.spec.ts'],
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      tsConfig: './tests/tsconfig.json',
    },
  },
};
