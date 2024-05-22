module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  "moduleFileExtensions": ["js"],
  "testMatch": [
    "**/tests/**/*.js",
    "**/?(*.)+(spec|test).js"
  ],
  "transform": {
    "^.+\\.js$": "babel-jest"
  }
};