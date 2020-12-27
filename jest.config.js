module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: [
        "js",
        "ts",
        "json",
        // tell Jest to handle `*.vue` files
        "vue"
    ],
    transform: {
        // process TypeScript files
        "^.+\\.ts$": "ts-jest",
        // process *.vue files with vue-jest
        ".*\\.(vue)$": "vue-jest"
    }
};
