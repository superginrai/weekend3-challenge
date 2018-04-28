const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const databaseConnection = require('./modules/database.connection');
const thingRouter = require('./routes/thing.route');

app.use(bodyParser.json());

app.use('/thing', thingRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listenting on port', PORT);
});