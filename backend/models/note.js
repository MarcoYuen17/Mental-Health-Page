const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Note = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  text: {
    type: String,
    trim: true,
    required: true,
  },
  timeStamp: {
    type: Date,
    trim: true,
    required: true,
  },
  position: {
    x: Number,
    y: Number,
    required: true,
  },
});

module.exports = mongoose.model('Note', Note);