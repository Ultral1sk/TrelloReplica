import React, { useState, Fragment } from 'react'
import axios                         from 'axios';

const UserLogin = () => {

      // const [userName, setuserName]   = useState('')
      const [ userEmail, setuserEmail ]       = useState('')
      const [ userPassword, setuserPassword ] = useState('')
      const [ errorMsg, seterrorMsg ]         = useState(false)

     
      const submitLoginDataHandler = (e) => {
            e.preventDefault();

            axios.post('http://localhost:3001/login', {
                  // userName,
                  userEmail,
                  userPassword,

            }).then(res => {
                  if (!res.data.token) {  localStorage.setItem("token", ""); 
                                          seterrorMsg(true);
                                          setTimeout(() =>  seterrorMsg(false), 2000);
                  } 
                                     
                  else                 {  localStorage.setItem("token", res.data.token);
                                          window.location.href = '/';                      
                  }   
            }); 
      }
      
      return (
            <Fragment>
                  <div className="signup-background">
                        <div className="signup-form">
                        <form onSubmit={submitLoginDataHandler} method="POST">
                              <h2>Sign In</h2>
                              <p>It's free and only takes a minute.</p>
                              <hr />
                              <h3 className="text-danger">{errorMsg ? 'Wrong E-mail or password' : ''}</h3>
                              {/* <div className="form-group">
                                          <label>Username</label>
                                    <input 
                                          onChange={ e => setuserName( e.target.value )}
                                          type="text" 
                                          value={userName}
                                          className="form-control" 
                                          name="username" 
                                          required="required" />
                              </div> */}
                              <div className="form-group">
                                          <label>Email Address</label>
                                    <input 
                                          onChange={ e => setuserEmail( e.target.value )}
                                          type="email" 
                                          value={userEmail}
                                          className="form-control" 
                                          name="email" 
                                          required="required" />
                              </div>
                                    <div className="form-group">
                                          <label>Password</label>
                                    <input 
                                          onChange={ e => setuserPassword( e.target.value )}
                                          type="password"
                                          value={userPassword}
                                          className="form-control" 
                                          name="password" 
                                          required="required" />
                              </div>             
                                    <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block btn-lg">Sign In</button>
                              </div>
                              <div className="small text-center">By clicking the Sign in button, you agree to our 
                              <br />
                                    <span >Terms &amp; Conditions, </span> 
                                          and 
                                    <span>Privacy Policy</span>
                              </div>
                        </form>
                        </div>
                  </div>
            </Fragment>
      );
}

export default UserLogin
