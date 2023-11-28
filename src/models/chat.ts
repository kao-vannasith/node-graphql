/* eslint-disable prettier/prettier */
import { Schema, model } from 'mongoose';

const ChatModelSchema = new Schema({
  username: String,
  msg: String,
});

// eslint-disable-next-line newline-after-var
const ChatModel = model("Chat", ChatModelSchema);
export default ChatModel;