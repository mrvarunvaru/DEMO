const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from the backend!',
    timestamp: new Date().toISOString(),
    data: [
      { id: 1, name: 'Item 1', description: 'This is the first item' },
      { id: 2, name: 'Item 2', description: 'This is the second item' },
      { id: 3, name: 'Item 3', description: 'This is the third item' }
    ]
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  res.json({
    success: true,
    message: 'Message received successfully!',
    data: { name, email, message }
  });
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
