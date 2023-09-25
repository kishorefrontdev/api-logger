// jest.config.js
module.exports = {
  preset: 'react-scripts',
  // Test environment
  testEnvironment: 'jsdom', // or 'node' if you are testing server-side code

  // Module file extensions
  moduleFileExtensions: ['js', 'json', 'jsx'],

  // Transform files before running tests
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // Setup files before running tests
  setupFiles: ['./axios-mock.js'], // Add any other setup files if needed
};
