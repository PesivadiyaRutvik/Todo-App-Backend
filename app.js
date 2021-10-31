// config the .env
require("dotenv").config({ path: "./config/.env" });

const express = require('express');
const taskRouter = require('./route/task');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use('/api/v1/tasks', taskRouter);

// get - '{URL}/api/v1/tasks' - get all tasks
// post - '{URL}/api/v1/tasks' - creat a new task
// get - '{URL}/api/v1/tasks/:id' - get one task
// patch - '{URL}/api/v1/tasks/:id' - update the task
// delete - '{URL}/api/v1/tasks/:id' - delete one task

app.listen(port, () => {
    console.log(`Server running ona port: ${port}`);
});