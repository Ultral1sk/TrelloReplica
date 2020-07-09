const mongoose = require('mongoose');

const newBoardSchema = new mongoose.Schema({
      _id      : mongoose.Schema.Types.ObjectId,
      newBoardId : {
            type : String || Number
      },
      newBoardTitle : {
            type : String
      },
      newBoardColorClass : {
            type: String
      }
      
});


module.exports = mongoose.model( "newBoard", newBoardSchema );