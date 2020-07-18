//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'app/lib/angular/angular.js',
      'app/lib/angular-animate/angular-animate.js',
      'app/lib/angular-resource/angular-resource.js',
      'app/lib/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(app/lib)/**/*!(.module|.spec).js',
      '**/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome', 'Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};