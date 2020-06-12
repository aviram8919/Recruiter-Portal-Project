import React from 'react'
import './style.css';
import {NavLink} from 'react-router-dom';

/**
* @author
* @function SupportLinks
**/

const SupportLinks = (props) => {
  return(
  
    <div className="Navigation">

        <div className="Navigation-Heading">
            <p>Support</p>
        </div>
        
        <div className="Navigation-links">

            <div className="image">
                <NavLink to="/content-missing"><img src={require('../../assets/Frameicon.png')} alt="Frame" /></NavLink>
            </div>
            
            <div className="text">
                <NavLink to="/content-missing"><p>Tutorials</p></NavLink>
            </div>

        </div>
    
        <div className="Navigation-links">

            <div className="image">
                <NavLink to="/content-missing"><img src={require('../../assets/Frameicon.png')} alt="Frame" /></NavLink>
            </div>

            <div className="text">
                <NavLink to="/content-missing"><p>Help Desk</p></NavLink>
            </div>

        </div>
    
        <div className="Navigation-links">

            <div className="image">
                <NavLink to="/content-missing"><img src={require('../../assets/Frameicon.png')} alt="Frame" /></NavLink>
            </div>
            
            <div className="text">
                <NavLink to="/content-missing"><p>Feedback</p></NavLink>
            </div>

        </div>
        
    </div>

    )

}

export default SupportLinks