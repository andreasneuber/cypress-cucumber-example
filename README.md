# cypress-cucumber-framework

## Application under test
The feature files, step definitions and page objects were written for https://github.com/andreasneuber/automatic-test-sample-site.
Readme in this repo has further details how to set it up.

## Run tests locally

```
npm install
npm run test:all
```

## Run tests in CI
- In package.json, change line 8 to `"test": "cypress run --browser chrome --headless --spec \"**/*.feature\""`

## Reports
Steps to create a Multiple Cucumber HTML report:
- Run tests with `npm test:all`
- json files in dir `cypress/cucumber-json` will be updated
- Then run `node cucumber-html-report.js`
- Open file `reports/cucumber-htmlreport.html/index.html` in browser

## Run with Docker
Build the container: `docker build --no-cache -t cypress-cucumber-docker .`

Then run it: `docker run --rm --net="host" -it cypress-cucumber-docker:latest npm run test:all`

--net=host is needed because the application under test is running on http://localhost:8000