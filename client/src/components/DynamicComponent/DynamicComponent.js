import React                    from 'react'
import { createBrowserHistory } from 'history';


// When we click on one of the created boards, we get the data and we pass it to this component through history
// and then we render the data
const DynamicComponent = (props) => {

      const history = createBrowserHistory().location.state;
      
      return <div  className={`${history.newBoardColorClass} dynamicBoardStyling`}>
                <h2>{history.newBoardTitle}</h2>
            </div>
      
}

export default DynamicComponent
