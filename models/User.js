const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defines the structure of the User collection in the database

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
  // sets moods as a map with strings as keys and arrays of strings as the
  // values
  moods: {
    type: Map,
    of: [String],
    default: {},
  }
}, {
  timestamps: true
})

module.exports = User = mongoose.model("User", UserSchema)