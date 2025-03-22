const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);
//app.get('/api/v1/tasks')               - GET all the tasks
//app.post('/api/v1/tasks')              - CREATE a new task
//app.get('/api/v1/tasks/:id')           - GET single task
//app.patch('/api/v1/tasks/:id')         - UPDATE task
//app.delete('/api/v1/tasks/:id')        - DELETE task

//CUSTOM RESPONSE 404
app.use(notFound);
//CUSTOM ERROR HANDLER
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
