module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 30,
      lines: 50,
      statements: 50
    }
  },
  coverageReporters: ['json', 'lcovonly', 'text', 'clover']
}
