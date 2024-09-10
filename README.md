# Automated API Testing with TypeScript, Playwright, and Cucumber
![Static Badge](https://img.shields.io/badge/Cypress-logo?style=for-the-badge&logo=cypress&logoColor=black&labelColor=green)
![Static Badge](https://img.shields.io/badge/TypeScript-logo?style=for-the-badge&logo=typescript&logoColor=white&labelColor=rgb(49%2C%20120%2C%20198)&color=rgb(22%2C%2027%2C%2034))
![Static Badge](https://img.shields.io/badge/Cucumber-logo?style=for-the-badge&logo=cucumber&logoColor=black&labelColor=rgb(35%2C%20217%2C%20108)&color=rgb(22%2C%2027%2C%2034))

This project offers a framework and tools for automated API testing using TypeScript, Playwright, and Cucumber, following Behavior-Driven Development (BDD) best practices and employing the Page Object Model design pattern.

## Testing SmartScaleHR Features 🧪

This suite of tests is specifically designed to validate and test features on the SmartScaleHR website. You'll find feature files under the `tests/features` directory.


## Table of Contents 📑
- [Requirements](#requirements)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Test Execution](#test-execution)


## <a id="requirements">Requirements 📋</a>

- Node.js 21.2.0
- @cucumber/cucumber: 10.0.1
- @playwright/test: 1.40.0
- @types/node: 20.9.2
- ts-node: 10.9.1
- winston: 3.11.0

## <a id="folder-structure">Folder Structure 📂</a>

- **cucumber.json:** Configuration or generated output by Cucumber.
- **package-lock.json:** Specific details about exact dependency versions for the project.
- **package.json:** Project configuration file for Node.js.

### Directory "src"


- **tests:** Directory containing test files and specifications.
  - **features:** Subdirectory containing specification files in Gherkin format.
  - **steps:** Directory containing files with steps for the specifications.



## <a id="installation">Installation 🛠️</a>

1. Clone this repository:

    ```bash
    git clone https://github.com/RaisingSolutions/Automation.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```


## <a id="test-execution">Test Execution ▶️</a>

Run all the tests:

```bash
npm run test
```

Open report:

```bash
start "" "test-results\reports\cucumber_report.html"
```

**NOTE:**

- Set up the respective environment variables beforehand.

