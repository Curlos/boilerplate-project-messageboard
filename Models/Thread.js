const mongoose = require('mongoose');
const { Schema } = mongoose;
const Reply = require('./Reply');

const threadSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    created_on: {
        type: Date,
        required: true
    },
    bumped_on: {
      type: Date,
      required: true
    },
    reported: {
        type: Boolean,
        required: true
    },
    delete_password: {
        type: String,
        required: true
    },
    replies: [Reply.schema],
    replycount: Number
  })
  
module.exports = mongoose.model('Thread', threadSchema);