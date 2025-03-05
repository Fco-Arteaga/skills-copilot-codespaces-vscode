// Create web server
// Create a new server that listens on port 3000. Create a new route for POST requests to /comments that logs the contents of the request body to the console.

const express = require('express');
const app = express();
const port = 3000;

app.post('/comments', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});