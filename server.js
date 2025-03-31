const app = require('./src/app')
require('dotenv').config()

// Start the server
const reseApiPort = process.env.REST_API_PORT || 3000

app.listen(reseApiPort, () => {
  console.log(`Rest api server running on port ${reseApiPort}`)
})
