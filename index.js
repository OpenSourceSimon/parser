const express = require('express');
const Parser = require('@postlight/parser');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.redirect('https://github.com/OpenSourceSimon/parser/');
});

app.get('/parse', async (req, res) => {
  const url = req.query.url;
  const result = await Parser.parse(url, { contentType: 'html' });
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
