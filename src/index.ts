// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/') {
//         res.end();
//     }
// });

// server.listen(3001, () => console.log('server on port 3001'));

import app from './server';

app.listen(3001, () => {
    console.log('hello from port 3001');
});
