const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
      referanceId: { 
            type: String 
      },
      userName: {
            type: String
      },
      userEmail: {
            type: String,
      },
      userPassword: {
            type: String,
      },
      userConfirmPassword: {
            type:  String,
      }

});

module.exports = mongoose.model( "user", userSchema );