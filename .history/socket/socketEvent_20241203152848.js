
module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('User connected');

        socket.on('sendMessage', (messageData) => {
            io.emit('receiveMessage', messageData);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};
