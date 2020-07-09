import React, { useState,  useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'



const CreateNewBoard = () => {

      // const triggerDataBase = props.trigger
      const [DBData, setDBData] = useState([])
            // console.log(triggerDataBase)

      useEffect(() => {
         
                  axios.get(`http://localhost:3001/newBoard`)
                  .then( response => { if( response.status === 200 ) { return setDBData(response.data.data) }
                             
                  })
                  .catch(err      => { return err  });
       
         
      }, [DBData]);


      const renderDataFromDB = DBData ? DBData.map((data, keys) => {
            return     <div key={keys} id="dbBox" className={data.newBoardColorClass} style={{width: '200px'}}>
                          <Link  to={{ pathname: `/newboard/${data._id}`, state:  data }} >
                              <h2>{data.newBoardTitle}</h2>
                          </Link>
                        </div>
      })
      :
      null


      return <>
            {renderDataFromDB}
      </>
}

export default CreateNewBoard









