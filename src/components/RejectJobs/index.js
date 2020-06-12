import React from 'react'
import './style.css';
import Card from '../UI/Card';
import RejectDatacard from '../RejectedDatacard';

/**
* @author
* @function RejectJobs
**/

const RejectJobs = (props) => {
  return(
    <Card style={{}}>
      
      <div className="Main">
        
        <RejectDatacard />
        
        <RejectDatacard />
        
        <RejectDatacard />
        
        <RejectDatacard />
        
        <RejectDatacard />
        
        <RejectDatacard />
        
      </div>
      
    </Card>
  )

}

export default RejectJobs