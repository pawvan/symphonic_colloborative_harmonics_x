const express = require('express');
const socketIo = require('socket.io');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);

const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const messageRoutes = require('./routes/messageRoutes');
app.use('/api/messages', messageRoutes);

require('./socket/socketEvents')(io);

server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000...');
});
