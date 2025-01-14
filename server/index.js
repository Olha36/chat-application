const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./Routes/userRoute');

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/api/users', userRoute);

const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;

app.get('/', (req, res) => {
  res.send('Welcome to our chat app APIs...');
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connection established'))
  .catch((error) => console.log('MongoDB connection failed', error.message));
