module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-coverage', // required for coverage
            'karma-jasmine-html-reporter'
        ],

        basePath: 'https://dev.agloa.org',

        files: [
            '*.js'
        ],

        autoWatch: false,

        frameworks: ['jasmine'],

        // Code coverage report
        reporters: ['progress', 'coverage'],
        preprocessors: {
            '*.js': ['coverage'],
            'tournament/*/*/*.js': ['coverage']
        },
        coverageReporter: {
            reporters: [{
                type: 'html',
                dir: 'coverage'
            }, { type: 'text' }]
        },

    });
};