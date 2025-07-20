require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./users'));
app.use('/api/claim', require('./claims'));

// ✅ DO NOT use app.listen() in Vercel
module.exports = app;
