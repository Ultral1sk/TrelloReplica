import React, { useState, useEffect }      from 'react'
import { createBrowserHistory } from 'history';
import axios                    from 'axios'
import CreateNewCardInside from '../CreateNewCardInside/CreateNewCardInside'

// When we click on one of the created boards, we get the data and we pass it to this component through history
// and then we render the data
const DynamicComponent = (props) => {

      const history = createBrowserHistory().location.state;
      const id = history._id 
      const classColor = history.newBoardColorClass
      const [ inputContent, setInputContent ] = useState('')
      const [ toggleInput, setToggleInput ]   = useState(false)
      
      const [ state, setstate ] = useState({
            id : "",
            input : "",
       
      })
      

      useEffect(() => {
            setstate( {
                  id : id,
                  input : inputContent 
            })
      }, [inputContent])


      console.log(state)
      const onSubmitCreateNewCard = ( e ) => {
            
            e.preventDefault()

            axios.patch(`http://localhost:3001/newboard/`,state )
            .then(res => {
                  if(res.status === 200) {
                        console.log(`comming from onClickCreateNewCard`,res)
                        setToggleInput(!toggleInput)
                        return res

                  }          
            })
            .catch(err => err);
      }

      const onClickDeleteMainBoard = () => {
            axios.delete(`http://localhost:3001/newboard/${id}`, id)
            .then(res => {
                  if(res.status === 200) {
                        window.location.href = '/'
                  }          
            })
            .catch(err => err);
      }     

      const onClickToggleInput = () => {
            setToggleInput(!toggleInput)

      }

      return <div  className={`${history.newBoardColorClass} dynamicBoardStyling`}>


      <div className="d-flex justify-content-between">
            <button className="dynamic__board__button text-white">
                  <b>
                        {history.newBoardTitle}
                  </b>
            </button>

            <button  className="dynamic__board__button mr-4 text-white" data-toggle="modal" data-target="#exampleModal">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                  <span >
                        <b> Delete Board </b> 
                  </span>
            </button>
      </div>



      {/* <CreateNewCardInside />  */}

      <CreateNewCardInside id={id}/>
            
     {/*  <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">

                  <div className="modal-body text-center text-white deleteBody">
                        <b>
                        Are you sure you want to delete this board?
                        </b>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                        <button onClick={onClickDeleteMainBoard} type="button" className={`btn  ${history.newBoardColorClass} `} >Yes</button>
                        <button type="button" className="btn btn-secondary " data-dismiss="modal">No</button>
                  </div>
              </div>
            </div>
      </div>
     {/*  <!-- Modal --> */}


      {/* maybe new component */}
      <>
      {
            toggleInput 
            ? 
            <div >
                  <form onSubmit={onSubmitCreateNewCard} className="newListWrapper">
                        <div>
                          <input onChange={e => setInputContent(e.target.value)} className="listContainer"  placeholder="Enter list title..."/>
                              
                        </div>
                        <div className="buttons__wrapper">
                              <button type="submit" className="add__new__list__button">Add List</button>
                              <button className="close__new__list__button" onClick={onClickToggleInput}>
                                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                                          <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                                    </svg>
                              </button>
                       
                        </div>
                
                  </form> 

                  </div>
            :

            <button  className="add__dynamic__board__button mr-4 text-white" onClick={onClickToggleInput}>
            <svg width="1.1em" height="1.2em" viewBox="0 0 16 16" className="bi bi-plus-square mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                  <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                  <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            </svg>
            <span className="ml-2">
                  Add another list
            </span>
      </button>
      }
                
                 
            </>

  
   
   
    

    
           
</div>
      
}

export default DynamicComponent
