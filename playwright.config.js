// @ts-check
const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    
    timeout: 10000
  },
  
  reporter: 'html',

   /* Configure projects for Prod and Dev */
  projects: [
    {
      name: 'prod',
      use: {
        browserName : 'chromium',
        headless : false,
        screenshot : 'only-on-failure',
        video : 'on',
        trace : 'on',
        baseURL : 'https://analytics.parallel.fi'
        
      },
    },

    {
      name: 'dev',
      use: {
        browserName : 'chromium',
        headless : false,
        screenshot : 'only-on-failure',
        video : 'on',
        trace : 'retain-on-failure',
        baseURL : 'https://analytics-dev.parallel.fi'
        
      },
    },
   ],

};

module.exports = config;
