const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const authRouter = require("./routers/auth");
const adminRouter = require("./routers/admin");
const csvRouter = require("./routers/file-upload");
const cors = require("cors");

const port = process.env.PORT || 4001;

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = socketIo(server);

app.use((req, res, next) => {
  req.io = io;
  next();
});

const emailToLowerCase = (req, res, next) => {
  if (req.body && req.body.email) {
    req.body.email = req.body.email.trim().toLowerCase();
  }
  next();
};

app.use("/csv-upload", express.urlencoded({ extended: false }), csvRouter);
app.use("/admin", express.json(), adminRouter);
app.use("/", express.json(), emailToLowerCase, authRouter);

io.on("connection", socket => {
  socket.on("connect", () => {
    console.log("Client Connected");
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
