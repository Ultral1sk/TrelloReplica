import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CreateNewCardInside = (props) => {

      const id = props.id
     
      const [dbCardData, setDbCardData] = useState([])
  
            useEffect(() => {
                  
                  axios.get(`http://localhost:3001/newBoard/${id}`)
                  .then( response => { if( response.status === 200 ) { return setDbCardData(response.data.data) }
                             
                  })
                  .catch(err      => { return err  });
       
         
      }, [dbCardData]);
 
      console.log(`comming from createnewcard inside`,dbCardData.insideBoard)
      const renderInsideCards = dbCardData.insideBoard ? dbCardData.insideBoard.map(card => {
            return <>
                  <div className="addNewCardWrapper">
                     <input placeholder="title"/>
                     <button className="remove__new__card__button">
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                     </button>
                     <div>
                     <button className="add__new__card__button mt-3">
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-plus mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                              <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                        </svg>
                        Add another card
                     </button>
               </div>
            </div>
            </>
      })
      :
      null

      return (
            <div>
            {renderInsideCards}
            
                  


            </div>
      )
}

export default CreateNewCardInside
