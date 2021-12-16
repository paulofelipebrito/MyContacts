const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json()); // adding middleware
app.use(routes);

// ERROR HANDLER (MIDDLEWARE) (AFETER ROUTES)
// You need to add express aync error of express
// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
