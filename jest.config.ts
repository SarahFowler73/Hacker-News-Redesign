// eslint-disable-next-line import/no-anonymous-default-export
export default {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'cjs'],

  //   collectCoverage: true,
  //   collectCoverageFrom: [
  //     'src/**/*.{ts,tsx}',
  //     '!**/node_modules/**',
  //     '!**/vendor/**',
  //     '!src/assets/**',
  //     '!src/locales/**',
  //     '!src/main.tsx',
  //     '!src/stories/**',
  //     '!src/vite-env.d.ts',
  //     '!src/**/*routes*.{tsx,ts}',
  //     '!src/api/**',
  //     '!src/guacamole/GuacamoleConnection.ts',
  //   ],
  //   coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  //   setupFilesAfterEnv: ['<rootDir>/setupTests.ts', 'jest-launchdarkly-mock'],
  //   transformIgnorePatterns: [
  //     'node_modules/(?!(@?react-dnd.*|dnd-core|uuid|@react-hook)/)',
  //   ],
  moduleDirectories: ['node_modules', 'src'],
  //   moduleNameMapper: {
  //     'src/(.*)': '<rootDir>/src/$1',
  //     'guacamole-common-js': '<rootDir>/src/testUtils/mocks/service/guacamole.ts',
  //     'vendor/guacamole/en-us-qwerty.json':
  //       '<rootDir>/vendor/guacamole/en-us-qwerty.json',
  //   },
  //   resolver: './enhancedResolver.cjs',
}
