import React, { useState,  useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'



const CreateNewBoard = () => {

      // const triggerDataBase = props.trigger
      const [DBData, setDBData] = useState([])
            // console.log(triggerDataBase)

      useEffect(() => {
         
                  axios.get(`http://localhost:3001/newBoard/`)
                  .then( response => { if( response.status === 200 ) { return setDBData(response.data.data) }
                             
                  })
                  .catch(err      => { return err  });
       
         
      }, [DBData]);


      // dynamic route that gets the data from db and will send it to a random route with it's own ID
      const renderDataFromDB = DBData ? DBData.map((data, keys) => {
            return   <Link key={keys} id="dbBox"  to={{ pathname: `/newboard/${data._id}`, state:  data }} >
                        <div id="class__receiver" className={data.newBoardColorClass} >
                              <h4>{data.newBoardTitle}</h4>
                        </div>
                          </Link>
      })
      :
      null


      
      return <>  {renderDataFromDB}  </>
}

export default CreateNewBoard









