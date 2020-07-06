module.exports = {
  testRegex: "((\\.|/*.)(spec))\\.js?$",
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "\\.svg": "<rootDir>/svgMock.js",
  },
  setupFilesAfterEnv: [
    "<rootDir>/enzyme.config.js"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/cypress"
  ],
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/src/app/mocks/*.{js,jsx}",
    "!**/src/main.js",
    "!**/src/app/utils/test-utils.js",
  ],
  setupFiles: ['./enzyme.config.js'],
  snapshotSerializers: ["enzyme-to-json/serializer"],
}