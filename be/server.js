const express = require('express');

const auth = require('./routes/auth');

const server = express();

server.use('/api/auth', auth);

server.listen(5000, () => {
  console.log('server listening on port 5000');
});
