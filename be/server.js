require('dotenv').config();
require('./models/User');
const express = require('express');
const auth = require('./routes/auth');

const server = express();

server.use('/api/auth', auth);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`** server listening on port ${PORT} **`);
});
