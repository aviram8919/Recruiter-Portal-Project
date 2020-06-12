import React from 'react'
import './style.css';

/**
* @author
* @function DataCard
**/

const DataCard = (props) => {
  return(
  
    <div class="DataCard">
      
      <div class="DataCard-container">
        
        <img src={require('../../assets/Frameicon.png')} alt="Frame" />
        <p>Job Title</p>
        <p>Company Name, Department</p>
        <p>Location</p>
        
        <div class="Horizontal-line"></div><br />
        
        <i class="fas fa-id-card"> 123453</i>
        &nbsp;
        &nbsp;
        &nbsp;
        <i class="fas fa-briefcase">  7-10 yrs</i><br/><br />
        
        <i class="far fa-calendar time"><strong> Full Time</strong></i><br /><br />
        
        <div class="Horizontal-line"></div><br />
        
        <i class="fas fa-user"> 3 candidates</i>
        &nbsp;
        &nbsp;
        
        <i class="far fa-money-bill-alt"><strong> 23 - 25 Lakhs</strong></i><br /><br />
        
        <a class="AcceptJob" href="#">Accept</a>
        &nbsp;
        &nbsp;
        <a class="RejectJob" href="#">Reject</a>
        
      </div>
    
    </div>
    
  )

}

export default DataCard