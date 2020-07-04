const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const userRouter = require("./user-router");
const cors = require("cors");
const Url = require("./models").streamUrl;

const port = process.env.PORT || 4001;

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = socketIo(server);

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(userRouter);

app.patch("/url", async (req, res, next) => {
  try {
    const url = await Url.findByPk(1);
    await url.update({ url: req.body.url });
    res.send(url);
  } catch (e) {
    next(e);
  }
});

app.get("/url", async (req, res, next) => {
  try {
    const url = await Url.findByPk(1);
    res.send({ url: url.url });
  } catch (e) {
    next(e);
  }
});

let interval;

io.on("connection", socket => {
  socket.on("connect", () => {
    console.log("Client Connected");
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
