//jshint strict: false
module.exports = function (config) {
  config.set({

    basePath: './',

    files: [
      'app/lib/jquery/dist/jquery.js',
      'app/lib/angular/angular.js',
      'app/lib/angular-resource/angular-resource.js',
      'app/lib/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app.js',
      // '**/*.module.js',
      'tournament/**/*.js',
      // '*!(.module|.spec).js',
      'crmUtil.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],//, 'Firefox'],

    // Code coverage report
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'tournament/*/*.js': ['coverage'],
      'tournament/*/*/*.js': ['coverage']
    },
    coverageReporter: {
      reporters: [{
        type: 'html',
        dir: 'coverage'
      }, { type: 'text' }]
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-coverage' // required for coverage
    ]

  });
};