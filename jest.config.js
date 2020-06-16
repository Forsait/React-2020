module.exports = {
  testRegex: "((\\.|/*.)(spec))\\.js?$",
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "\\.svg": "<rootDir>/svgMock.js"
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/enzyme.js"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/cypress"
  ]
}