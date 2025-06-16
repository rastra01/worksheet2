const express = require('express');
const path = require('path');
const app = express();

// Tentukan folder static
const staticPath = path.join(__dirname, 'public');
console.log('Serving static from:', staticPath);

app.use(express.static(staticPath));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`);
});
