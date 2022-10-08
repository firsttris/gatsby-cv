const {defineConfig} = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://stephen.resume.engineering',
        specPattern: "cypress/e2e",
    },
})