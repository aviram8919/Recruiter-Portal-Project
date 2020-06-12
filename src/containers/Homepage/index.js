import React from 'react'
import './style.css';
import Card from '../../components/UI/Card';
import RightSide from '../../components/RightSide';
import MiddleSection from '../../components/MiddleSection';
import Sidebar from '../../components/Sidebar';


/**
* @author
* @function Homepage
**/

const Homepage = (props) => {
  return(
  
    <section className="container">
      
      <RightSide />
      
      <MiddleSection />
      
      <Sidebar />
      
    </section>
    
  )

}

export default Homepage