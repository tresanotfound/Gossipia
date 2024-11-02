require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbConfig');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const gossipRoutes = require('./routes/gossipRoutes');
const app = express();

connectDB();

app.use(express.json());

app.use(cors());

app.use('/', gossipRoutes);

app.use(errorHandler);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});