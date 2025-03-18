const express = require('express');
const app = express();

//routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

//app.get('/api/v1/tasks')               - GET all the tasks
//app.post('/api/v1/tasks')              - CREATE a new task
//app.get('/api/v1/tasks/:id')           - GET single task
//app.patch('/api/v1/tasks/:id')         - UPDATE task
//app.delete('/api/v1/tasks/:id')        - DELETE task

const port = 3000;
app.listen(port, console.log(`Server is listening on port ${port}...`));
