const socketController = (socket) => {
  socket.on("disconnect", () => {});

  socket.on("send-message", (payload, callback) => {
    const id = 12345;

    callback(id);
    socket.broadcast.emit("send-message", payload);
  });
};
module.exports = { socketController };
