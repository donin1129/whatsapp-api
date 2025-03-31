require('./routes')
const { restoreSessions } = require('./sessions')
const { routes } = require('./routes')
const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const { maxAttachmentSize, allowedOrigins } = require('./config')

const corsOptions = {
    origin: allowedOrigins, // Allow your frontend origin
    allowedHeaders: ['Content-Type', 'x-api-key'], // Allow the x-api-key header
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    preflightContinue: false, // Ensures Express automatically handles preflight responses
};

// Enable trust proxy
app.set("trust proxy", true); // Trust all proxies

// Initialize Express app
app.disable('x-powered-by')
app.use(cors(corsOptions))
app.use(bodyParser.json({ limit: maxAttachmentSize + 1000000 }))
app.use(bodyParser.urlencoded({ limit: maxAttachmentSize + 1000000, extended: true }))
app.use('/', routes)
app.options('*', cors(corsOptions)); // Enable preflight for all routes

restoreSessions()

module.exports = app
