const { defineConfig } = require('cypress');
const fs = require('fs'); 

module.exports = defineConfig({
  trashAssetsBeforeRuns: true,
  downloadsFolder: 'cypress/downloads',
  fixturesFolder: 'cypress/fixtures',

  // Screenshots
  screenshotsFolder: 'cypress/screenshots',
  screenshotOnRunFailure: true, // Take screenshot on test failure

  // Videos
  video: true, // Record video of tests
  videosFolder: 'cypress/videos',
  videoCompression: false, // No video compression

  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 60000,
  retries: {
    runMode: 2, // Retry failing tests in run mode
    openMode: 0 // No retries in interactive mode
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json', // Custom reporter config file
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      // Load environment-specific settings file
      const environmentName = config.env.environment || 'local'; // Default to 'local' if not set
      const environmentFilename = `./settings/${environmentName}.settings.json`;

      try {
        // Read and parse the settings file
        const settings = JSON.parse(fs.readFileSync(environmentFilename, 'utf8'));

        // Set baseUrl from the settings file
        if (settings.baseUrl) {
          config.baseUrl = settings.baseUrl;
        } else {
          throw new Error('Base URL is not defined in the settings file.');
        }

        // Merge env variables from the settings file
        if (settings.env) {
          config.env = {
            ...config.env,
            ...settings.env,
          };
        }

        console.log('Loaded settings for environment:', environmentName);

        // Optionally set projectId if available in env
        if (config.env.projectId) {
          config.projectId = config.env.projectId;
        }
      } catch (error) {
        console.error(`Error loading environment settings from ${environmentFilename}:`, error);
        process.exit(1); // Exit process with error code
      }

      // Load plugins like mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      // Return the updated config object
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Path to test files
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}', // Path to support files
  },
});
