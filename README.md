# analyticse2etests

E2E tests for Parallel Analytics application

## Set UP 

**1. Clone analyticse2etests git repo in your directory

    git clone https://github.com/debasis86/analyticse2etests.git
    cd analyticse2etests
    
**2. Install nvm version and npm dependencies

    nvm i && nvm use
    npm i
    
## Running Tests

#### 1. Run Playwright test

    npx playwright test
    
#### 2. Run Playwright in debug mode

    npx playwright test --debug
    
#### 3. Run single test

    npx playwright test tests/AnalyticsOverviewTest.spec.js
    
#### 4. Run test in headed mode

    npx playwright test --headed





