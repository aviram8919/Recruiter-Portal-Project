import React from 'react'
import './style.css';
import {NavLink} from 'react-router-dom';

/**
* @author
* @function NavigationLinks
**/

const NavigationLinks = (props) => {
  return(
  
        <div className="Navigation">
            
            <div className="Navigation-Heading">
               <p>Navigation</p>
            </div>
            
            <div className="Navigation-links">
                
                <div className="image">
                    <NavLink to="/"><img src={require('../../assets/Frameicon.png')} alt="Frame" /></NavLink>
                </div>
                
                <div className="text">
                    <NavLink to="/"><p>Dashboard</p></NavLink>
                </div>
                
            </div>
            
            <div className="Navigation-links">
                
                <div className="image">
                    <NavLink to="/content-missing"><img src={require('../../assets/Frameicon.png')} alt="Frame" /></NavLink>
                </div>
                
                <div className="text">
                    <NavLink to="/content-missing"><p>Candidates</p></NavLink>
                </div>
            </div>
            
            <div className="Horizontal-line">

            </div>
            
        </div>
   )

}

export default NavigationLinks