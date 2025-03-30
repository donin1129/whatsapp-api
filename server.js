const app = require('./src/app')
const { baseWebhookURL } = require('./src/config')
require('dotenv').config()

// Start the server
const reseApiPort = process.env.REST_API_PORT || 3000

// Check if BASE_WEBHOOK_URL environment variable is available
if (!baseWebhookURL) {
  console.error('BASE_WEBHOOK_URL environment variable is not available. Exiting...')
  process.exit(1) // Terminate the application with an error code
}

app.listen(reseApiPort, () => {
  console.log(`Server running on port ${reseApiPort}`)
})
