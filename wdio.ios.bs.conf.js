const { join } = require('path');

// const allure = require('allure-commandline');
// const video = import('wdio-video-reporter');

exports.config = {
  // hostname: 'localhost',
  // port: 4723,
  path: '/wd/hub',
  // user: 'larissanasciment_sYEKV3',
  // key: 'knaDC7LxXpxJ1kLfJWoc',
  user: 'kelvin_nTBOvP',
  key: 'aGjy5Rv2TLszSRR5w1uL',
  // services: ['appium'],
  services: ['browserstack'],
  specs: ['./test/specs/**/*.spec.js'],
  suites: {
    //   products: ['./test/specs/products.spec.js', './test/specs/search.spec.js'],
    // },
    products: ['./test/specs/search.spec.js'],
  },
  framework: 'mocha',
  capabilities: [
    {
      project: 'Meu primeiro projeto Appium IOS BS',
      build: 'Ebac Test',
      name: 'ebac_test',
      device: 'iPhone 12 Pro Max',
      os_version: '14',
      'browserstack.debug': true,
      app: 'bs://9baeaff9b945b7d40437d8eb1ef7a18bd132e380',
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
  beforeSuite: async function () {
    // verificar se o app já está instalado e executando
    let state = await driver.queryAppState('br.art.ebaconline');
    if (state !== 4) {
      await driver.launchApp();
    }
  },

  afterSuite: async function () {
    // fechar o app
    await driver.closeApp();
  },
  maxInstances: 1,
};
