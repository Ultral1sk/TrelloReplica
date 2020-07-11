import React from 'react';
import logo from '../assets/trellopng.png'
    
    

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
      <nav className="navbar navbar-expand-lg  text-white">
      <button className="logoButton">
       <img width="30px" height="30px" src={logo} />
      <a className="navbar-brand logo--text" href="/">Boards</a>

      </button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mr-auto">
                        <li className="nav-item active">
                              <a className="nav-link text-white" href="/">
                                    <b>Simple Trello</b> 
                                    <span className="sr-only">(current)</span>
                              </a>
                        </li>
                  </ul>
                  <form onSubmit={onSubmitToRemoveToken} className="form-inline my-2 my-lg-0">
                        <button type="submit" className="logout__button" >Logout</button>
                  </form>
            </div>
      </nav>
      )
}

export default Navbar
