/* eslint-disable prettier/prettier */
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServer } from '@apollo/server';
import 'dotenv/config';
import mongoose from 'mongoose';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

import { Server, Socket } from "socket.io"; //replaces (import socketIo from 'socket.io')
import { createServer } from "http";

import ChatModel from './models/chat';

// eslint-disable-next-line @typescript-eslint/ban-types
type ApolloContext = {};

const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: '*' } });


io.on('connection', (socket: Socket) => {
  console.log('connection');
  socket.on('chat message', (msg) => {
    // eslint-disable-next-line newline-after-var
    const chat = new ChatModel({
      username: 'kao',
      // eslint-disable-next-line object-shorthand
      msg: msg
    });
    chat.save();

    // eslint-disable-next-line prefer-template
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

httpServer.listen(4400);


const uri:any = process.env.MONGODB_URI;
const main = async () => {
  await mongoose.connect(uri);
};

main()
  .then(() => console.log('🎉 connected to database successfully'))
  .catch((error) => console.error(error));

const server = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then((result) => {
  console.log(`🚀 Server ready at: ${result.url}`);
});