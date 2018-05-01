// Require mongoose for database connection
const mongoose = require('mongoose');

// Attempt to connect to mongodb
const databaseUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo';
mongoose.connect(databaseUrl);

// Send message to the terminal on successful connection
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected on', databaseUrl);
});

// Send message to the terminal on failed connection with error
mongoose.connection.on('error', (error) => {
    console.log('mongoose connection failed:', error);
});

// Export the connection module
module.exports = databaseUrl;