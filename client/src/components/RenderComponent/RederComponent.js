import React from 'react'
import { createBrowserHistory } from 'history';


const RederComponent = (props) => {

      const history = createBrowserHistory().location.state;
            console.log(`history present`,history)
      
      return (
            <div style={{width: '100vw', height: '100vh'}} className={history.newBoardColorClass}>
                <h2>{history.newBoardTitle}</h2>
            </div>
      )
}

export default RederComponent
