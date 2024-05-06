const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongoInstanceRoutes = require('./routes/mongoInstanceRoutes');
const databaseRoutes = require('./routes/databaseroutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/mongo-instances', mongoInstanceRoutes);
app.use('/api/databases', databaseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/admin-panel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});