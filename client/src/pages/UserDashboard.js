import React, { useEffect, useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios'

const UserDashboard = () => {

            
                  return (
                    <div className="all">
                      <h1 className="title">WELCOME</h1>    
                      <button
                        className="btn logoutButton logout-button mr-auto"
                        // onClick={logout}
                      >
                        Logout
                      </button>
            </div>
      )
  
}
export default UserDashboard
