import React from 'react'
import './style.css';
import Card from '../UI/Card';
import { NavLink } from 'react-router-dom';
import NavigationLinks from '../NavigationLinks';
import JobsLinks from '../JobsLinks';
import SupportLinks from '../SupportLinks';

/**
* @author
* @function RightSide
**/

const RightSide = (props) => {
  return(
  
    <Card style={{width:'25%',paddingTop:'20px', border: '2px solid #333',paddingBottom:'50px'}}>
        
        <NavigationLinks />
        
        <JobsLinks />
        
        <SupportLinks />
        
    </Card>
    
    )

 }

export default RightSide