const mongoose = require('mongoose');
const { Schema } = mongoose;

const replySchema = new Schema({
    text: {
        type: String,
        required: true
    },
    created_on: {
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
  })
  
module.exports = mongoose.model('Reply', replySchema);
module.exports.schema = replySchema
