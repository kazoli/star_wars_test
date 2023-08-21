export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // process `*.tsx` files with `ts-jest`
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|jpg|jpeg|png)$':
      '<rootDir>/src/tests/mocks/file.mock.ts',
  },
  verbose: true,
};
