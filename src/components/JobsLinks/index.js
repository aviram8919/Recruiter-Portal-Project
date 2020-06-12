import React from 'react'
import './style.css';
import {NavLink} from 'react-router-dom';

/**
* @author
* @function JobsLinks
**/

const JobsLinks = (props) => {
  return(
  
    <div className="Navigation">
        
        <div className="Navigation-Heading">
            <p>Jobs</p>
        </div>
        
        <div className="Navigation-links">

            <div className="image">
                <NavLink to="/Live-Jobs"><img src={require('../../assets/Frameicon.png')} alt="Frame" /></NavLink>
            </div>
            
            <div className="text">
                <NavLink to="/Live-Jobs"><p>Live Jobs</p></NavLink>
            </div>

        </div>
        
        <div className="Navigation-links">
            
            <div className="image">
                <NavLink to="/Add-candidates"><img src={require('../../assets/Frameicon.png')} alt="Frame" /></NavLink>
            </div>
            
            <div className="text">
                <NavLink to="/Add-candidates"><p>Accepted Jobs</p></NavLink>
            </div>

        </div>
        
        <div className="Navigation-links">
            
            <div className="image">
                <NavLink to="/Rejected-jobs"><img src={require('../../assets/Frameicon.png')} alt="Frame" /></NavLink>
            </div>
            
            <div className="text">
                <NavLink to="/Rejected-jobs"><p>Rejected Jobs</p></NavLink>
            </div>

        </div>
        
        <div className="Horizontal-line">
        
        </div>
        
    </div>
   )

}

export default JobsLinks