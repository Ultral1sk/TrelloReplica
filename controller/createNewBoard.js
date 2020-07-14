const NewBoardSchema = require('../model/newBoardSchema');
const mongoose = require('mongoose');



exports.createNewBoard =  (req , res, next) => {
      console.log(req.body)
      const { title, divClass, id } = req.body
      
      const newBoardContent = new NewBoardSchema({
            _id : mongoose.Types.ObjectId(),
            newBoardId : id,
            newBoardTitle : title,
            newBoardColorClass : divClass,
          
         
          
      })
      newBoardContent.save( err => {
            if( err ) return res.json( { status : 'failed', message : 'mainBoard failed to create a new board' } );
            else      return res.json( { status : 'mainBoard success', message : 'mainBoard created successfully'})
      });


}

//findByIdAndUpdate mainly very useful when you have to update a specific document
exports.createInsideBoard = ( req, res, next ) => {
      var { id, input } = req.body 
       
      //UPDATING THE SUBSCHEMA INSIDE MONGODB, next step trying to reach the data from frontend with GET REQUEST and display it
      NewBoardSchema.findByIdAndUpdate(
            id,
            {$push: {"insideBoard": {insideBoardTitle: input, insideBoardContent: 'example'}}},
            {safe: true, upsert: true, new : true},
            function(err, model) {
                console.log(err);
            }
        );
     //1 - the upsert option. 
     //The upsert option will add a new document and this new document will contain 
     //the content of the update that was passed to the findByIdAndUpdate() method.    
     //2 - the new option
     // its default value is false
     // when it is false we don't get the new version of the document we've updated
     // when it is true we receive the update document/obj/arr.
     //3 - safe ??
  
}

exports.getInsideBoard = ( req, res ) => {
     
   
      const id = req.params.id

          
      NewBoardSchema.findById({_id : id})
      .exec()
      .then((data, err) => {
            if( err ) res.json({ status : 'failed',  message : err  });

            else      res.json({ status : 'success', message : `data after finding the mongo db INSIDEboard success`,data  });
      })
      .catch(err => {
            res.status(500).json({
                  error : err
            });
      });
}


exports.getNewBoard = ( req, res ) => {

       
      NewBoardSchema.find({})
      .exec()
      .then((data, err) => {
            if( err ) res.json({ status : 'failed',  message : err  });

            else      res.json({ status : 'success', message : `data after finding the mongo db board success`,data  });
      })
      .catch(err => {
            res.status(500).json({
                  error : err
            });
      });
 
};




exports.deleteBoard = ( req, res ) => {
      console.log(req.params)
    

      NewBoardSchema.deleteOne({_id : req.params.id })
            .exec()
            .then( result => {
                   res.status(200).json({
                        message : 'board Deleted'
                  })
            })
            .catch(err => 
                  res.status(500).json({ error : `board not deleted ${err}` }))
      
   
}

