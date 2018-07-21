const mongoose = require('mongoose');
const { Schema } = mongoose;

const keyboardSchema = new Schema({
  name: String,
  size: Number,
  type: String,
  split: Boolean,
  switches: String,
  keycaps: String,
  description: String,
  image: String,
  owner: String
});

mongoose.model('keyboards', keyboardSchema);
