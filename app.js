const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
require('express-async-errors');
const path = require('path');

const express = require('express');
const app = express();

const fileUpload = require('express-fileupload');

// database
const connectDB = require('./db/connect');

const productRoutes = require('./routes/productRoutes');

// error handler
const notFoundMiddleware = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');

app.use(express.static('./public'));
app.use(express.json());
app.use(fileUpload());

app.get('/', (req, res) => {
  res.send('<h1>File Upload Starter</h1>');
});

app.use('/api/v1/products', productRoutes);

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
    await connectDB(process.env.MONGO_URI);
    console.log('DB connection successful!');
  } catch (error) {
    console.log(error);
  }
};

start();
