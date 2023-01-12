const express = require('express');
require('express-async-errors');

const routes = require('./routes');
const cors = require('./app/middlewares/cors.js');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json()); // adding middleware
app.use(cors);
app.use(routes);

// ERROR HANDLER (MIDDLEWARE) (AFTER ROUTES)
// You need to add express async error of express
// eslint-disable-next-line no-unused-vars
app.use(errorHandler);

app.listen(3001, () => console.log('Server started at http://localhost:3001'));
