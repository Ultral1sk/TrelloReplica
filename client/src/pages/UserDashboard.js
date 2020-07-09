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
                  if( res.status === 200 ) { return window.location.reload(); }
            
                  else                     { return res.status(500);          }
                
            })
            .catch(err =>  err );

      };


      // 10 colored boxes that are inside the modal 
      const renderColorBoxes = classes.map(box => {
            return <Link to="#" key={box.id}>
            
                        <div onClick={() => onClickHandler(box.id, box.colorClass)}  id="modal-color-boxes"  className={box.colorClass}>

                        </div>
            </Link> 

      })

    return <div className="d-flex justify-content-between flex-wrap">
            <CreateNewBoard/>

            <Button className="p-5" color="danger" onClick={toggle}>{buttonLabel}Create new board...</Button>
                  <Modal isOpen={modal} toggle={toggle} className={className} style={{maxWidth : '400px'}}>
                        <form onSubmit={onSubmitHandler}>
                        <ModalBody>
                              <input  className="ml-3" type="text" value={title} onChange={ e => setTitle ( e.target.value )}/>
                              <div className="d-flex flex-wrap justify-content-center">
                                    {renderColorBoxes}
                              </div>
                        </ModalBody>
                        <ModalFooter>
                              <div className="w-100 d-flex justify-content-start ml-3">
                                    <Button type="submit" color="primary" onClick={toggle}>Create board</Button>{' '}
                                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                              </div>
                        </ModalFooter>
                        </form>
                        
                  </Modal>
    </div>

   
}
export default UserDashboard










// axios.post(`http://localhost:3001/newBoard/${state.elementId}`,state
