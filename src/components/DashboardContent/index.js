import React from 'react'
import Card from '../UI/Card'

/**
* @author
* @function DashboardContent
**/

const DashboardContent = (props) => {
  return(

      <Card style={{margin:'20px',color:'#333',fontSize:'20px'}}>
          
          <div className="Content">
              
              <pre>Welcome to Recruiter Portal</pre><br/>
              
              <pre>To proceed click on the jobs links</pre>
              
           </div>
           
      </Card>

   )

 }

export default DashboardContent