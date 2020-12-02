const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  moods: {
    type: Map,
    of: [String],
    default: {},
  }
}, {
  timestamps: true
})

module.exports = User = mongoose.model("User", UserSchema)