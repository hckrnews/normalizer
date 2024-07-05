module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json'],

    transform: {
        '^.+\\.js?$': 'babel-jest',
    },

    transformIgnorePatterns: ['node_modules/(?!(@hckrnews|@trojs)/)'],

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },

    testMatch: ['**/__tests__/*.js'],

    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],

    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'test-reports',
                outputName: 'jest-junit.xml',
            },
        ],
    ],

    testResultsProcessor: 'jest-sonar-reporter',
};
