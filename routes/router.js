const express = require('express');

// Import our modular routers for /tips and /feedback
const employeeRouter = require('./employee.js');
const departmentRouter = require('./department.js');
const roleRouter = require('./role.js');

const app = express();

app.use('/employee', employeeRouter);
app.use('/department', departmentRouter);
app.use('/role', roleRouter);

module.exports = app;
