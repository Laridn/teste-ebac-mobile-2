const { join } = require('path');

// const allure = require('allure-commandline');
// const video = import('wdio-video-reporter');

exports.config = {
  // hostname: 'localhost',
  // path: '/wd/hub',
  // port: 4723,
  user: 'larissanasciment_sYEKV3',
  key: 'knaDC7LxXpxJ1kLfJWoc',
  // services: ['appium'],
  services: ['browserstack'],
  specs: ['./test/specs/**/*.spec.js'],
  framework: 'mocha',
  capabilities: [
    {
      app: 'bs://d7324adb486da38fae20ec44e098f908379ba7d3',
      device: 'Samsung Galaxy S20',
      os_version: '10.0',
      project: 'Meu primeiro projeto em Device Farm',
      build: '1',
      name: 'teste_login',

      // platformName: 'Android',
      // 'appium:platformVersion': '9',
      // 'appium:deviceName': 'ebac-qe',
      // 'appium:automationName': 'UiAutomator2',
      // 'appium:app':
      //   '/Users/larissanascimento/Projects/Cursos/EBAC/Engenharia de Qualidade de Software/testes-mobile/app/android/loja-ebac.apk',
      // 'appium:appWaitActivity':
      //   'com.woocommerce.android.ui.login.LoginActivity',
      // newCommandTimeout: 240,
    },
  ],
  waitForTimeout: 20000,
  mochaOpts: {
    timeout: 300000,
    //   reporters: [
    //     'spec',
    //     [
    //       'allure',
    //       {
    //         outputDir: 'allure-results',
    //         disableWebdriverStepsReporting: true,
    //         disableWebdriverScreenshotsReporting: true,
    //       },
    //     ],
    //     // [
    //     //   video,
    //     //   {
    //     //     saveAllVideos: true, // If true, also saves videos for successful test cases
    //     //     videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
    //     //   },
    //     // ],
    //   ],
    //   onComplete: function () {
    //     const reportError = new Error('Could not generate Allure report');
    //     const generation = allure(['generate', 'allure-results', '--clean']);
    //     return new Promise((resolve, reject) => {
    //       const generationTimeout = setTimeout(() => reject(reportError), 5000);

    //       generation.on('exit', function (exitCode) {
    //         clearTimeout(generationTimeout);

    //         if (exitCode !== 0) {
    //           return reject(reportError);
    //         }

    //         console.log('Allure report successfully generated');
    //         resolve();
    //       });
    //     });
    //   },
    // },
    // afterStep: function (test, scenario, { error, duration, passed }) {
    //   if (error) {
    //     driver.takeScreenshot();
    //   }
    // },
  },
};
