const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.use('/tasks', taskRoutes);

module.exports = app;