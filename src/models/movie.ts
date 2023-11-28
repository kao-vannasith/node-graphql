/* eslint-disable prettier/prettier */
import { Schema, model } from 'mongoose';

const MovieModelSchema = new Schema({
  title: String,
  rating: Number,
  year: Number,
});

// eslint-disable-next-line newline-after-var
const MovieModel = model("Movie", MovieModelSchema);
export default MovieModel;