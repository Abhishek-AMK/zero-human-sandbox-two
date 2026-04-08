const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Backend server is running' });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/ping', (_req, res) => {
  res.json({ pong: true });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
