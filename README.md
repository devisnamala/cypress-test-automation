# Cypress Test Automation
![Static Badge](https://img.shields.io/badge/Cypress-logo?style=for-the-badge&logo=cypress&logoColor=black&labelColor=green)
![Static Badge](https://img.shields.io/badge/Javascript-logo?style=for-the-badge&logo=javascript&logoColor=white&labelColor=rgb(49%2C%20120%2C%20198)&color=rgb(22%2C%2027%2C%2034))

This project provides a framework and tools for automated UI and API testing using Cypress and JavaScript, following the Page Object Model (POM) design pattern.

## Testing Features 🧪

This suite of tests is specifically designed to validate and test features on the Parabank website. 


## Table of Contents 📑
- [Requirements](#requirements)
- [Features](#folder-structure)
- [Installation](#installation)
- [Test Execution](#test-execution)


## <a id="requirements">Requirements 📋</a>

- Node.js 21.2.0
- cypress: 10.11.0
- cypress-mochawesome-reporter: 3.5.1


## <a id="Features">Feature 📂</a>

**Atomic and Independent Test Cases:** Tests are designed to be modular and self-contained, ensuring that each test case can run independently without relying on others.

**Robust Locator Strategies:** Employs reliable methods for identifying and interacting with web elements, minimizing the risk of test failures due to changes in the UI.

**No Hard-Coded Strings or Test Data in Spec Files:** Avoids embedding static strings or test data directly in test files, promoting maintainability and flexibility.

**Hooks for Repeated Steps:** Utilizes hooks to handle common setup or teardown tasks across all test cases, reducing redundancy and improving test consistency.

**External Data Loading from Fixtures:** Retrieves test data from external JSON files, enhancing data management and making it easier to update test scenarios.

**Environment-Specific Configurations:** Supports configuration management and environment variables tailored to different environments (e.g., development, local, QA), allowing seamless environment transitions.

**Test Filtering by Tags**: Enables the execution of tests based on specific tags (e.g., regression, smoke), facilitating targeted testing and efficient test management.

**Dynamic Browser and Mode Configuration:** Allows specification of the browser and test mode through environment variables, providing flexibility in test execution.

**Centralized Route Configuration:** Manages URL endpoints and routes in a centralized configuration file, simplifying updates and maintenance.

**Reusable Utility Functions:** Includes a library of reusable functions within cypress/e2e/utils for common test operations, promoting code reuse and reducing duplication.

**Multiple Reporters Configuration:** Supports various reporting formats (e.g., JUnit XML, cpress-mochawesome-reporter HTML) to accommodate different reporting needs and preferences.


## <a id="installation">Installation 🛠️</a>

1. Clone this repository:

    ```bash
    git clone 
    ```

2. Install dependencies:

    ```bash
    npm install
    ```


## <a id="test-execution">Test Execution ▶️</a>

**Running Cypress Tests**
**Open the Cypress Test Runner:**

```bash
npx cypress open
```

**Run All Tests:**

Executes all test spec files located in the cypress/e2e folder. By default, tests are run in headless mode using the Electron browser.

```bash
npx cypress run
```

**Run Tests in a Specific Browser:**

```bash
npx cypress run --browser <browser_name>
```

Replace <browser_name> with the desired browser (e.g., chrome, firefox) to run tests in that browser.

**Run Tests in Headed Mode:**

```bash
npx cypress run --headed
```

Runs tests in a visible browser window rather than headless mode.

**Run a Specific Test Spec:**

```bash
npx cypress run --spec <path_to_spec_file> --headed --browser <browser_name>
```

Replace <path_to_spec_file> with the path to the specific test spec file, and <browser_name> with the desired browser.

**Filter Tests by Tag:**

```bash
npx cypress run --env grepTags="<tag>"
```

Replace <tag> with the tag you want to filter by. For example, to run tests tagged as @smoke:

```bash
npx cypress run --spec cypress/e2e/tests/AddToCartTest.cy.js --env grepTags="@smoke"
```

Using Command Line Arguments with npm Scripts: When using npm scripts, append an extra -- before the Cypress arguments:

```bash
npm run <script_name> -- --env grepTags="<tag>" --headed --browser <browser_name>
```

```bash
npm run test:registration -- --env environmentName="local",grepTags="@smoke" --headed --browser chrome
```

It will run tests with following configurations:
spec 
browser chrome
mode headed
tag smoke
environmentName local
baseUrl https://parabank.parasoft.com is automatically teken from environmentName


