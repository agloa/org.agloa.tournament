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
      'CRM.js',
      'Common.js',
      'crmUtil.js',
      'app.js',
      '**/*.module.js',
      '**/*.service.js',
      '*!(.module|.spec).js',
      '!(app/lib)/**/*!(.module|.spec).js',
      '**/*.spec.js',
      
  // <script src="app/lib/jquery/dist/jquery.js"></script>
  // <script src="tournament/dashboard/dashboard.component.js"></script>
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