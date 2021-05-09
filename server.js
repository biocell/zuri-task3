const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const users = require('./routes/users');
dotenv.config({ path: './config/config.env' });
connectDB();

const app = express();
app.use(express.json());

app.use('/api/v1/users', users);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running on ${process.env.PORT}`));