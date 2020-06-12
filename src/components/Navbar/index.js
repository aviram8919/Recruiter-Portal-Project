import React from 'react'
import './style.css';
import Card from '../UI/Card';
import {NavLink} from 'react-router-dom';
import ReactDom from 'react-dom';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
  
    <div className="navbar">
      
      <nav>
        
        <ul className="navbarMenu">
          
          <li className="FloatLeft"><NavLink  to="/Home"><img src={require('../../assets/Bar.png')} alt="MenuBar" /></NavLink></li>
          <li className="FloatLeft navbarMenu-logo"><NavLink  to="/Home"><span>LOGO</span></NavLink></li>

          <li className="FloatRight">
            <select className="FloatRight-Dropdown">
              <option selected>User Name</option>
            </select>
          </li>
          <li className="FloatRight"><NavLink to="/user"><img src={require('../../assets/user.png')} alt="User" /></NavLink></li>
          <li className="FloatRight"><NavLink to="/Groups"><img src={require('../../assets/group.png')} alt="Group" /></NavLink></li>
          <li className="FloatRight"><NavLink to="/Notify"><img src={require('../../assets/MessageBox.png')} alt="MessageBox" /></NavLink></li>
          
        </ul>
        
      </nav>
      
    </div>
  )

}

export default Navbar