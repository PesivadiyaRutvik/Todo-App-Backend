const path = require('path');
const express = require('express');
const logger = require('./config/logger');

// config the .env
require('dotenv').config({ path: path.join(__dirname, './config/.env') });

const database = require('./config/db');
const taskRouter = require('./route/task');

const app = express();
const port = process.env.PORT || 5000;

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/tasks', taskRouter);

// get - '{URL}/api/v1/tasks' - get all tasks
// post - '{URL}/api/v1/tasks' - creat a new task
// get - '{URL}/api/v1/tasks/:id' - get one task
// patch - '{URL}/api/v1/tasks/:id' - update the task
// delete - '{URL}/api/v1/tasks/:id' - delete one task

const astiblistedConnections = async () => {
  try {
    const dbURL = process.env.DB_URL;
    await database(dbURL);
    app.listen(port, () => {
      logger.info(`Server running on a port: ${port}`);
    });
  } catch (err) {
    logger.error(err);
  }
};

astiblistedConnections();
