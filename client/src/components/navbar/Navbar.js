import React, { useState } from 'react';
import logo  from '../assets/trellopng.png'
import { createBrowserHistory } from 'history';

    

const Navbar = () => {


      const onSubmitToRemoveToken = (e) => {
                // removing the token frm local storage so the user
            // will be automatically redirected to the non restricted pages
            // in this case register/login
            e.preventDefault()
            window.location.href = '/login'
            localStorage.setItem("token", "")

      }

      return (
      <nav className={`navbar navbar-expand-lg  text-white d-flex justify-content-between`}>
            <button className="logoButton">
                  <img width="30px" height="30px" src={logo} />
                  <a className="navbar-brand logo--text" href="/">Boards</a>
            </button>

            <form onSubmit={onSubmitToRemoveToken} className="form-inline my-2 my-lg-0">
                  <button type="submit" className="logout__button" >
                        <svg width="1.7em" height="2em" viewBox="0 0 16 16" className="bi bi-box-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11.646 11.354a.5.5 0 0 1 0-.708L14.293 8l-2.647-2.646a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                        <path fillRule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                        <path fillRule="evenodd" d="M2 13.5A1.5 1.5 0 0 1 .5 12V4A1.5 1.5 0 0 1 2 2.5h7A1.5 1.5 0 0 1 10.5 4v1.5a.5.5 0 0 1-1 0V4a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 1 1 0V12A1.5 1.5 0 0 1 9 13.5H2z"/>
                        </svg>
                  </button>
            </form>
      </nav>
      )
}

export default Navbar
