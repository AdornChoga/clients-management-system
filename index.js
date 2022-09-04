require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./server');

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connection established');
  })
  .catch((error) => {
    console.log(`Database connection failed: ${error.message}`);
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
