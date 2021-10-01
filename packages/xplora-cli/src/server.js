const express = require("express");
const cors = require("cors");
const app = express();

const httpServer = require("http").createServer(app);

global.io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

module.exports = { server: httpServer, app };
