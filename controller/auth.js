const userSchema = require('../model/userSchema');
const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JWT_SECRET_KEY;
const bcrypt = require('bcrypt');
const saltRounds = 10;

//function that is going to take the an id as a parameter, and return 
// a jwt.sign function with the received id parameter
// then is going to assign the jwtSecret key, and the third function is expire time
const signToken = id => {
      return jwt.sign({ id }, jwtSecretKey, { expiresIn: 3600000 });
    };
    



// error on creating user terminal throws and error that it requrires salt
exports.register = async ( req, res ) => {

            let { userName, userEmail, userPassword } = req.body;
            
            //checking if the newly incoming use has the same email adres as the one that is in our database
            let userCheck = await userSchema.findOne( { userEmail } );
            if( userCheck ) return  res.json( { status : 'failedEmail', message : 'E-malil already taken!'} )
            
            
            // here if we don't await for the password to be hashed it'll be undefined
            const hashedPassword = await  bcrypt.hash( userPassword, saltRounds )
         
              
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

exports.login =  ( req, res ) => {

      // RECEIVE THE INFO FROM FRONTEND
      const { userEmail, userPassword } = req.body;

      // FIND USERS EMAIL IN THE DATABASE
      userSchema.findOne({ userEmail }, (err, result) => {
            
         if     ( err )     return res.json( { status : 'failed', message: `userEmail not found ${err}`} );    
         if     ( !result ) return res.json( { status : 'failed', message: 'email or password wrong' } );
         else {

            //COMPARATION BETWEEN THE INCOMING PASSWORD
            // and 
            //THE PASSWORD IN THE DATABASE
            bcrypt.compare( userPassword, result.userPassword )  // THIS FUNCTION RETURNS A BOOLEAN ture if the PASSWORDS MATCH, falase if they DONT!
            .then( isPassCorrect => {  
                
                  
         
                  // if the passwords match
                  if( isPassCorrect ) {
                        //this function takes id as a parameter, and in this case is the user with this email, received an id and is passed to this function
                        // so it can receive the token.
                        const token = signToken( result.id );  // function is created on line number 10
                              
                        res.json({
                              status : "success",  message: 'Congratz! you logged in successfuly',
                              // if the status is success pass the token 
                              token
                        });

                  } else {
                        res.json({
                              status : "failed",
                              message: "email or password is wrong"
                        });
                  }
            });
         }
      });
};



