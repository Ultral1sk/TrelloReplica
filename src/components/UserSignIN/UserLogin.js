import React, { useState, Fragment } from 'react'

const UserLogin = () => {

      const [userName, setuserName]   = useState('')
      const [userEmail, setuserEmail] = useState('')
      const [userPassword, setuserPassword] = useState('')

      const submitValueHandler = e => {
            e.preventDefault();
            console.log(` value comming from submit hadnler`,userName, userEmail, userPassword )

      }




      return (
            <Fragment>
                  <div className="signup-background">
                        <div className="signup-form">
                        <form onSubmit={submitValueHandler} method="POST">
                                          <h2>Sign In</h2>
                                          <p>It's free and only takes a minute.</p>
                                          <hr />
                                    <div className="form-group">
                                                <label>Username</label>
                                          <input 
                                                onChange={ e => setuserName( e.target.value )}
                                                type="text" 
                                                value={userName}
                                                className="form-control" 
                                                name="username" 
                                                required="required" />
                                    </div>
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
                                          <button type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
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
      )
}

export default UserLogin
