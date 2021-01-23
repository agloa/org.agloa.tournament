//jshint strict: false
module.exports = function(config) {
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

      // '**/*.spec.js',
      "unit-tests/core/*/*.spec.js",
      
      "tournament/core/util.js",
    
      "tournament/dashboard/dashboard.component.js",
      "tournament/person/person.component.js",
      "tournament/address/address.component.js",
      "tournament/phone/phone.component.js",
      "tournament/email/email.component.js",
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