const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('dist', {
  cacheControl: true,
  setHeaders(res) {
    res.set('Cache-Control', 'max-age=31536000');
  }
}));
app.listen(port, () => console.log(`Listening on port ${port || 5000}!`));
