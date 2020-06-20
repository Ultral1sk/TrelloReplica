import React, { useState, useEffect } from 'react'
import axios                          from 'axios'
import { Redirect, useHistory }                   from 'react-router-dom';


// this component with provide the props to the component only if the 
// widthAuth function finds a token inside local storage, which means when the user is logged in
const withAuth = ( ComponentToProtect, path ) => {

      

      return (props) => {

        const [ loading,  setLoading  ] = useState( true );
        const [ redirect, setRedirect ] = useState( false );
       
        
        useEffect(() => {
              axios.get(`http://localhost:3001${path}`, {
                    headers: { "x-auth-token": localStorage.getItem( "token" ) }

              })
              .then( res => {
                 // if we've found token meaning if the user is logged in
                  if( res.status === 200 ) { 
                       return setLoading( false );
                  }

                  else                     { 
                        const error = new Error( res.error ); 
                        throw error
                  }
              })
              .catch( err => {
                    setLoading( false );
                    setRedirect( true );
              });
            
        }, []);
                  if( loading ) { return null; }
                  if( redirect ){ return <Redirect to="/login" />; }

                                  return <ComponentToProtect {...props } />;

      }
    

}

export default withAuth
