const mongoose = require('mongoose');

const InsideBoardSchema = new mongoose.Schema({
      _id : mongoose.Schema.Types.ObjectId,
      insideBoardTitle : String,
      insideBoardContent : String

})

const NewBoardSchema = new mongoose.Schema({
      _id                 : mongoose.Schema.Types.ObjectId,
      newBoardId          : { type : String || Number  },
      newBoardTitle       : {  type : String  },
      newBoardColorClass  : { type: String  }, 
      insideBoard         : [ InsideBoardSchema ]
      
});



 // i need to find a  way to create new textinputs with content save them into db and render them afater
 // but tehy need to look like they are a part of the same row

module.exports = mongoose.model( "newBoard", NewBoardSchema );