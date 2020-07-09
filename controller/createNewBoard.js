const newBoardSchema = require('../model/newBoardSchema');
const mongoose = require('mongoose');

exports.createNewBoard =  (req , res) => {
      console.log(req.body)
      const { title, divClass, id} = req.body
      
      const newBoardContent = new newBoardSchema({
            _id : mongoose.Types.ObjectId(),
            newBoardId : id,
            newBoardTitle : title,
            newBoardColorClass : divClass
      })

      newBoardContent.save( err => {
            if( err ) return res.json( { status : 'failed', message : 'user failed to create a new board' } );
            else      return res.json( { status : 'board success', message : 'board created successfully'})
      })

}


exports.getNewBoard = ( req, res ) => {

       
       newBoardSchema.find({})
      .exec()
      .then((data, err) => {
            if( err ) res.json({ status : 'failed',  message : err  });

            else      res.json({ status : 'success', message : `data after finding the mongo db board success`,data  });
      })
      .catch(err => {
            res.status(500).json({
                  error : err
            });
      })


      //  const id = await req.params.id
       
      //  newBoardSchema.find({newBoardId : id})
      // .exec()
      // .then((data, err) => {
      //       if( err ) res.json({ status : 'failed',  message : err  });

      //       else      res.json({ status : 'success', message : `data after finding the mongo db board success`,data  });
      // })
      // .catch(err => {
      //       res.status(500).json({
      //             error : err
      //       });
      // })

 

};