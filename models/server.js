const express = require("express");
const cors = require("cors");
const { socketController } = require("../sockets/controller");
/*
This works for multiples routes in multiples files
*/
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);
    this.middlewares();
    this.routes();
    //Config Sockets
    this.sockets();
  }

  middlewares() {
    //Public directory
    this.app.use(cors());

    //this is for the main folder in front
    this.app.use(express.static("public"));
  }

  routes() {}

  sockets() {
    this.io.on("connection", socketController);
  }

  startServer() {
    this.server.listen(process.env.PORT, () => {
      console.log(`Servidor Corriendo en:${this.port}`);
    });
  }
}

module.exports = Server;
