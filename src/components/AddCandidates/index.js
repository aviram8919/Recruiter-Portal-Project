import React from 'react'
import './style.css';
import Card from '../UI/Card';
import CandidateDatacard from '../CandidateDatacard';

/**
* @author
* @function AddCandidates
**/

const AddCandidates = (props) => {
  return(
      <Card style={{}}>
        
        <div className="Main">
          
          <CandidateDatacard />
          
          <CandidateDatacard />
          
          <CandidateDatacard />
          
          <CandidateDatacard />
          
          <CandidateDatacard />
          
          <CandidateDatacard />
          
        </div>
        
      </Card>
    )

}

export default AddCandidates