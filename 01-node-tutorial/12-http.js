const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our HOME page!');
    return;
  }
  if (req.url === '/about') {
    res.end('Here is our short HISTORY');
    return;
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We cannot seem to find the pade you are looking for</p>
    <a href='/'>Back Home</a>
    `);
});

server.listen(5000);
