import http from "http";
import dotenv from "dotenv";
import express from "express";
import { Server } from "socket.io";

dotenv.config({ path: "./env" });

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello" });
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
