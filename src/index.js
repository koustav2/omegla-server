import { Socket } from 'socket.io';
import http from 'http';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config({ path: './env' });
import express from 'express';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(http);
const PORT = process.env.PORT || 3000;
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
