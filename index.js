const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Export app for testing
module.exports = app;

if (require.main === module) {
  // Only listen if this file is run directly
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
