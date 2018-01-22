var mongoose = require("mongoose");

require("dotenv").load();
mongoose.connect(process.env.DB_URL);
exports.mongoose = mongoose;


var Schema = mongoose.Schema;


// User schema
var userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password:String,
  contactNumber:String,
  createdDate: { type: Date, default: Date.now },
  });

exports.User = mongoose.model("User", userSchema, "users");
