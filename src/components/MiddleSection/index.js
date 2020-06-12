import React from 'react'
import './style.css';
import Card from '../UI/Card';
import DataCard from '../DataCard';

/**
* @author
* @function MiddleSection
**/

const MiddleSection = (props) => {
  return(
    <Card style={{}}>
      
      <div className="Main">
        
        <DataCard />
        
        <DataCard />
        
        <DataCard />
        
        <DataCard />
        
        <DataCard />
        
        <DataCard />
        
      </div>
      
    </Card>
    
  )

}

export default MiddleSection