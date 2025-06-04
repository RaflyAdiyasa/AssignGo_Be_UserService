import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import db from './models/index.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);

// Test database connection
db.sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

// Sync models
db.sequelize.sync({ alter: true })
  .then(() => console.log('Models synchronized'))
  .catch(err => console.error('Model sync error:', err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;