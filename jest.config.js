/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

module.exports = createJestConfig({
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.tsx'],
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '\\.(scss|css|sass)$': 'identity-obj-proxy',
  },

  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/**/*.spec.tsx',
    '!src/**/*_app.tsx',
    '!src/**/*_document.tsx',
  ],
  // coverageReporters: ['lcov', 'json'],
})
