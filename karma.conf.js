// karma.conf.js
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-coverage'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false
    },
    files: [],
    preprocessors: {},
    reporters: ['progress', 'junit', 'coverage'],
    junitReporter: {
      outputDir: 'tests/results',
      outputFile: 'junit.xml',
      suite: '',
      useBrowserName: false
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage',
      subdir: 'report'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
