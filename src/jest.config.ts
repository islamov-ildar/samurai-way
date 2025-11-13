export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    transformIgnorePatterns: [
        "/node_modules/(?!(axios)/)" // транспилировать axios
    ],
};
