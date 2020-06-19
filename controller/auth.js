const userSchema = require('../model/userSchema');
const bcrypt = require('bcrypt');
const saltROunds = 10;

exports.postRegister = async ( req, res ) => {

            let { userName, userEmail, userPassword } = req.body;

            //checking if the newly incoming use has the same email adres as the one that is in our database
            let userCheck = await userSchema.findOne( { userEmail } )
            if( userCheck ) return  res.json( { status : 'failedEmail', message : 'E-malil already taken!'} )


            // here if we don't await for the password to be hashed it'll be undefined
            const hashedPassword = await bcrypt.hash( userPassword, saltROunds )
              
            const newUser =  new userSchema({
                  userName     : userName, 
                  userEmail    : userEmail,
                  // without the key the hasshed password doesnt know where to be stored
                  userPassword : hashedPassword
            })

            newUser.save( err => {
                     if ( err ) return res.json( { status : 'failed',  message : 'user failed to register' } );
                     else       return res.json( { status:  'success', message : 'user created'                 } );
            });      
}