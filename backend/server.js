const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');

const PORT = 4000;
require('dotenv').config();


app.use(cors());
app.use(express.json());

const mongodbUri = process.env.MONGODB_ATLAS_URI;

mongoose.connect(mongodbUri,{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
