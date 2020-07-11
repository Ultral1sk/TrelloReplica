import React, { useState }            from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import {  Link  }                                from 'react-router-dom'
import { classes }                               from '../classes'
import axios                                     from 'axios'
import CreateNewBoard                            from '../components/NewBoard/CreateNewBoard'


const initialState = { title : '',  id : '',   divClass : '' }

const UserDashboard = (props) => {
      const { buttonLabel, className }       = props;                         // modal reactstrap props
      const [ modal, setModal ]              = useState(false);               // toggling the modal on/off
      const [ title, setTitle ]              = useState('')
      const [ id, setId ]                    = useState('')
      const [ divClass, setDivClass ]        = useState('')

      const [ combinedData, setCombinedData] = useState(initialState)         // combining all the state so it can be send in database on submit

      

      const toggle = () => setModal(!modal);

      // on click it;ll get he id and the class so we can RE-pass them into the state that is preparing to be sent into the DATABASE
      const onClickHandler = ( id, colorClass ) => {
            setId(id)
            setDivClass(colorClass)
            setCombinedData({
                  title       : title,
                  id          :  id,
                  divClass    : colorClass
            });
      }


      const onSubmitHandler = ( e ) => {
            e.preventDefault();
            
            axios.post(`http://localhost:3001/newBoard/${combinedData.id}`, combinedData)
            .then(res => 
            {
                  if( res.status === 200 ) { 
                        return setCombinedData({
                              title       : '',
                              id          : '',
                              divClass    : ''
                        });
                  
                  }
            
                  else                     { return res.status(500);          }
                
            })
            .catch(err =>  err );

      };


      // 10 colored boxes that are inside the modal 
      const renderColorBoxes = classes.map(box => {
            return <Link to="#" tabIndex={box.id} key={box.id} className="ml-3 mt-2">
            
                        <div onClick={() => onClickHandler(box.id, box.colorClass)}  id="modal-color-boxes"  className={box.colorClass}>

                        </div>
            </Link> 

      })

    return <div className="d-flex justify-content-start mt-5 flex-wrap">
            <div className="pl-2">
            <div className="d-flex pl-4">
                  <span>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-people-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                        </svg>
                  </span>
                  <h4 className="pl-4">Personal Boards</h4>
            </div>
      
       
            <Button  className="modalCreateBoardButton  ml-4" color="secondary" onClick={toggle}>{buttonLabel}Create new board...</Button>
            </div>
             
                  <Modal isOpen={modal} toggle={toggle} className={`${className} modalBG`} style={{backgroundColor: 'transparent'}}>
                        <form onSubmit={onSubmitHandler}>
                        <div className={`modal-header `} >
                              <div className={`modal-create-board-color_blue ${divClass} input__wrapper__background`}>
                                    <input placeholder="Add board title"  className="ml-3 inputTitle" type="text" value={title} onChange={ e => setTitle ( e.target.value )}/>
                              </div>                    
                        </div>
                        <ModalBody className="">
                              <div className="d-flex flex-wrap justify-content-evenly">
                                    {renderColorBoxes}
                              </div>
                        </ModalBody>
                        <ModalFooter>
                              <div className="w-100 d-flex justify-content-start ml-4">
                                    <Button className={`modal-create-board-color_blue ${divClass} `} type="submit" onClick={toggle}>Create board</Button>{' '}
                                    <Button className="ml-3" color="secondary" onClick={toggle}>Cancel</Button>
                              </div>
                        </ModalFooter>
                        </form>
                        
                  </Modal>

               
       
            <CreateNewBoard/>

    

    </div>

   
}
export default UserDashboard










// axios.post(`http://localhost:3001/newBoard/${state.elementId}`,state
