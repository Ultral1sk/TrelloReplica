const userSchema = require('../model/userSchema');
const bcrypt = require('bcrypt');


exports.postRegister = ( req, res ) => {
      const { userName,  userEmail, userPassword } = req.body
     


     const newUser = new userSchema({
      userName,
      userEmail,
      userPassword
     });
     
     newUser.save( err => {

            if( err ) return res.json( { status : `failed`, message : ` user failed to be saved to db${err}`    } );
            else      return res.json( { status : "success", message : "Congratz! New user created successfuly" } );

     });
      
  
}