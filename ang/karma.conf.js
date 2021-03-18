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
      '**/*.service.js',
      // '*!(.module|.spec).js',
      'crmUtil.js',
      // '!(app/lib)/**/*!(.module|.spec).js',

      'unit-tests/**/*.spec.js',

      "tournament/core/util.js",

      "tournament/dashboard/dashboard.component.js",
      "tournament/person/person.component.js",
      "tournament/address/address.component.js",
      "tournament/phone/phone.component.js",
      "tournament/email/email.component.js",
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