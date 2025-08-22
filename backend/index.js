const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Node.js Backend API!' });
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

// IMPORTANT: bind to 0.0.0.0 so other containers and host can reach it
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Backend running on http://0.0.0.0:${PORT}`);
});
