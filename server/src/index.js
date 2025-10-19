require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { securityHeaders, apiLimiter } = require('./middleware/security');
const errorHandler = require('./middleware/errorHandler');
const ventureRoutes = require('./routes/ventureRoutes');
const articleRoutes = require('./routes/articleRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(securityHeaders);

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use('/api', apiLimiter);

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

app.use('/api/ventures', ventureRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/contact', contactRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
