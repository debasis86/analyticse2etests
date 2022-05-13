# analyticse2etests

E2E tests for Parallel Analytics application

## Set UP 

#### 1. Clone analyticse2etests git repo in your directory

    git clone https://github.com/debasis86/analyticse2etests.git
    cd analyticse2etests
    
#### 2. Install nvm version and npm dependencies

    install Node.js
    npm init playwright
         - ok to proceed --> y
         - typescript or javascript --> javascript
         - add github action workflo --> N
         
    
## Running Tests

#### 1. Run Playwright test

    npx playwright test
    
#### 2. Run Playwright in debug mode

    npx playwright test --debug
    
#### 3. Run single test

    npx playwright test tests/AnalyticsOverviewTest.spec.js
    
#### 4. Run test in headed mode

    npx playwright test --headed
    
#### 5. Run test in specific browser

    npx playwright test --browser=webkit

#### 6. Run test in different environment [dev / prod]

    npx playwright test --project <dev/prod>
    
#### 7. Run record and playback mode 

    npx playwright codegen <url>
    For e:g  npx playwright codegen https://analytics-dev.parallel.fi/overview
    
## Framework Support

    #### 1. Running UI tests for analytics.
    #### 2. Running API tests for analytics.
    #### 3. Running tests based on environment DEV or PROD.
    #### 4. Running tests for all browsers(Chrome, Firefox and Safari) extend support for mobile browsers also.
    #### 5. Taking screenshots on failure and videos .
    #### 6. Generate reports of test execution. 
    #### 7. Record  traces of test providing additional information to Developer.
    #### 8. Support for Visual testing of images or elements.


## Framwork None Supported list

    #### 1. Adding wallet extension.
    #### 2. Dapps use cases that need Polkadot or Parallel Wallet 


## What Next ?

    #### 1. Integrating with CI/CD pipeline and run as part of DEV and Prod deployment of Analytics .
    #### 2. Automate all P0 and P1 cases.






