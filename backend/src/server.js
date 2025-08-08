require('dotenv').config();
const express = require('express');

const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', router);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});