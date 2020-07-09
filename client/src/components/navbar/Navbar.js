import React from 'react';

      const removeTokenToLogOut = () =>  {
            // removing the token frm local storage so the user
            // will be automatically redirected to the non restricted pages
            // in this case register/login
            localStorage.setItem("token", "")
      }
    

const Navbar = () => {
      return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="/">Navbar Logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                        <button onClick={removeTokenToLogOut}>Logout</button>
                  </form>
            </div>
      </nav>
      )
}

export default Navbar
