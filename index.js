const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 5000;
// const origin = process.env.ORIGIN || 'http://localhost:5000';
// const io = require('socket.io')(server, {
//   cors: {
//     origin: [origin]
//   }
// });
const io = require('socket.io')(server);
const util = require('util');

app.use(express.static(__dirname + '/public'));

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

io.on('connection', (socket) => {
  console.log(`socket connected`);

  socket.on('queueRenderPage', (num) => {
    console.log(`num: ${num}`);
    io.emit('pageMove', num);
  })
})
