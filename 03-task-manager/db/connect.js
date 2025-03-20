const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://ingady:paesok1963@nodeexpressprojects.shkmp.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects';

const connectDB = (url) => {
  return mongoose.connect(connectionString, {});
};

module.exports = connectDB;
