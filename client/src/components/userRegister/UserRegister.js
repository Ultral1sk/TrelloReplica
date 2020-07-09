import React, { useState, Fragment } from 'react';
import { Link }          from 'react-router-dom';
import axios                         from 'axios';

const UserRegister = () => {
 
      const [userName, setuserName]                           = useState('')
      const [userEmail, setuserEmail]                         = useState('')
      const [userPassword, setuserPassword]                   = useState('')
      const [userConfirmPassword, setuseruserConfirmPassword] = useState('')
      const [emailtaken, setemailtaken]                       = useState(false);
      const [signUPsucess, setsignUPsucess]                   = useState(false);
      const [signUPfailed, setsignUPfailed]                   = useState(false);

    
      const submitRegisterDataHandler = e => {
            e.preventDefault();

            if( userPassword !== userConfirmPassword ) {
                  setsignUPfailed(true)
                  setTimeout(() => setsignUPfailed(false) , 2000);
            }
            
            else {
                  axios.post('http://localhost:3001/register', { userName, userEmail, userPassword })
                  .then(response => {

                        if( response.data.status === 'success' )  {
                              setsignUPsucess(response.data.message);
                              setTimeout(() => window.location.href = "/login", 2000);           
                        }   

                        else  {
                              setemailtaken(response.data.message);
                              setTimeout(() => setemailtaken(''), 2000);  
                        }

                  }).catch(err =>  {
                        console.log(err)
                  });
            }
      };

      return (
      <Fragment>
            <div className="signup-background">
                  <div className="signup-form">
                        <form onSubmit={submitRegisterDataHandler} >
                                    <h2>Sign Up</h2>   
                                    <p>It's free and only takes a minute.</p>
                                    <hr />
                                   
                                    <h3 className="errorMsg ">{ emailtaken }</h3>
                                    <h3 className="errorMsg">{ signUPsucess }</h3>
                                    <h3 className="errorMsg">{ signUPfailed ? 'Passwords do not match' : ''}</h3>
                            
                              <div className="form-group">
                                    <input 
                                          onChange={ e => setuserName( e.target.value )}
                                          type="text" 
                                          value={userName} 
                                          className="form-control" 
                                          name="username" 
                                          placeholder="Username" 
                                          required="required" />
                              </div>
                              <div className="form-group">
                                    <input 
                                          onChange={ e => setuserEmail( e.target.value )}
                                          type="email" 
                                          value={userEmail} 
                                          className="form-control" 
                                          name="email" 
                                          placeholder="Email Address" 
                                          required="required" />
                              </div>
                                    <div className="form-group">
                                    <input 
                                          onChange={ e => setuserPassword( e.target.value )}
                                          type="password" 
                                          value={userPassword} 
                                          className="form-control" 
                                          name="password" 
                                          placeholder="Password" 
                                          required="required" />
                              </div>
                                    <div className="form-group">
                                    <input 
                                          onChange={ e => setuseruserConfirmPassword( e.target.value )} 
                                          type="password" 
                                          value={userConfirmPassword} 
                                          className="form-control"
                                          name="confirm_password" 
                                          placeholder="Confirm Password" 
                                          required="required" />
                              </div>
                           
                              <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
                              </div>
                                    <p className="small text-center">By clicking the Sign Up button, you agree to our <br />
                                          <Link to="#">Terms &amp; Conditions</Link>, 
                                                and 
                                          <Link to="#">Privacy Policy.</Link>
                                    </p>
                        </form>
                        <div className="text-center">Already have an account? 
                              <Link  to="/login">Login here</Link>
                        </div>
                  </div>
            </div>
       
      </Fragment>
      )
}

export default UserRegister
